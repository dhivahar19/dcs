import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cdrdata } from '../models/cdrdata.model';

@Injectable({
  providedIn: 'root'
})
export class ChargingService {

  constructor(private http: HttpClient) { }
  /**
   * @description Get CDR data from json file
   * @returns Observable<Cdrdata[]>
   */
  getCdrData(): Observable<Cdrdata[]> {
    return this.http.get<Cdrdata[]>('./../../assets/json/data.json').pipe(
      catchError(this.handleHttpError<never>('fetch cdr data'))
    );
  } 
  handleHttpError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      throw new Error(`${operation} failed: ${message}`);
    };
  }
}
