import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Bike } from '../models/bike';
import { catchError, retry, map } from 'rxjs/operators';
import { Corridas } from '../models/corridas';
import { Historico } from '../models/historico';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikeUrl = "https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/all";
  corridasUrl ="https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/corrida/all";
  historicoUrl="https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/obterdados";

  currentUser: User; 
   bikes: Bike[];
   corridas: Corridas[];
   historico: Historico[];
  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getBikes(token): Observable<Bike[]> {

   
      var reqHeader = new HttpHeaders({ 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
       });
  
    

    return this.httpClient.get<Bike[]>(this.bikeUrl,{ headers: reqHeader })
      .pipe(
        map((response: any) => {
          const bikes = response;
          if (bikes) {
            localStorage.setItem("bikes", JSON.stringify(bikes.bikes));
            return bikes;
          }
        })
      )
  }

  getCorridas(token){
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
   });



return this.httpClient.get<Corridas[]>(this.corridasUrl,{ headers: reqHeader })
  .pipe(
    map((response: any) => {
      const corridas = response;
      if (corridas.status) {
        localStorage.setItem("corridas", JSON.stringify(corridas.corridas));
        return corridas;
      }
    })
  )
  }

  getHistorico(id: number): Observable<Historico[]>{
    this.currentUser=JSON.parse(localStorage.getItem('user'));
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.currentUser.token
   });
      return this.httpClient.get<Historico>(this.historicoUrl + '/' + id, {headers: reqHeader})
        .pipe( 
          map((response: any) => {
          const historico = response;
          if (historico.status) {
            localStorage.setItem("historico", JSON.stringify(historico));
            return historico;
          }
        })
        )
    }
  

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
