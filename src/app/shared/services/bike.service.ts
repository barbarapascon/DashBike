import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Bike } from '../models/bike';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikeUrl = "https://apitccsmartbike20200527201546.azurewebsites.net/api/bike/all";
   bikes: Bike[];
  constructor(private httpClient: HttpClient,private bikeService: BikeService) { }
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
