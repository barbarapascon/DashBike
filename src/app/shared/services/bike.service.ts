import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Bike } from '../models/bike';
import { catchError, retry, map } from 'rxjs/operators';
import { Corridas } from '../models/corridas';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikeUrl = "https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/all";
  corridasUrl ="https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/corrida/all"
   bikes: Bike[];
   corridas: Corridas[];
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
            localStorage.setItem("bikes", JSON.stringify(bikes));
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
      if (corridas) {
        localStorage.setItem("corridas", JSON.stringify(corridas));
        return corridas;
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
