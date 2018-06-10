import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { baseURL } from '../shares/baseURL';
import { catchError, map } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  
};
@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }
  
  getGeoFeatureProperty(url:string): Observable<any> {
    return this.http.get(baseURL+'mongodbServer/'+url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
   }

  
/**
 * Add a function for extract response data.
 * @param res 
 */
private extractData(res: Response) {
  let body = res;
  return body || { };
}

/**
* Add the error handle function.
* @param error 
*/
private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError('Something bad happened; please try again later.');
};

}
