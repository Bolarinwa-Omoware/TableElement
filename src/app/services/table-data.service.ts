import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { baseURL } from '../shares/baseURL';
import { catchError, map } from 'rxjs/operators';
import { IllegalExtData, PeriodicElement, FieldSorter } from '../app-interface/tableData';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  
};
@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  // getIllegalFeatureProperties(url: string): Observable<IllegalExtData>{
  //   return this.http.get<IllegalExtData>(url);
  // }
  
  getGeoFeatureProperty(url: string): Observable<PeriodicElement[]> {
    return this.http.get<IllegalExtData>(baseURL+'mongodbServer/'+url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
   }

  
/**
 * Add a function for extract response data.
 * @param res 
 */
  private extractData(res: IllegalExtData): PeriodicElement[]{
    const result: PeriodicElement[] = [];

    const fieldFilter: FieldSorter[] = [
      { _id: "ESTATE", fieldName: "ESTATE NAME" },
      { _id: "BLOCK_ID", fieldName: "BLOCK ID" },
      { _id: "Ex_PLOT_NO", fieldName: "EXCESS PLOT" },
      { _id: "STREET_NAM", fieldName: "STREET NAME" },
      { _id: "ADDRESS", fieldName: "ADDRESS" },
      { _id: "EX_SIZE", fieldName: "EXCESS AREA TAKEN" },
      { _id: "ADM_CHARGE", fieldName: "ADMINISTRATIVE CHARGES" },
      { _id: "ANN_GRent", fieldName: "ANNUAL GROUND RENT" },
      { _id: "CAP_CONB", fieldName: "CAPITAL CONTRIBUTION" },
      { _id: "LandCharge", fieldName: "LAND CHARGES" },
      { _id: "NOR_PREMIU", fieldName: "NORMAL PREMIUM" },
      { _id: "RATE_PSqM", fieldName: "RATE PER SQ. METERS" },
      { _id: "STAMP_DUTY", fieldName: "STAMP DUTY " },
      { _id: "RegConvFee", fieldName: "REGISTRATION FEE " },
      { _id: "SURVEY_FEE", fieldName: " SURVEY FEE " },
      { _id: "AMT_PAYABL", fieldName: " AMOUNT PAYABLE  " },
      { _id: "DELIV_STAT", fieldName: " DELIVERY STATUS  " },
      { _id: "REMARK", fieldName: " REMARK " }
    ]

    for (let i = 0; i < fieldFilter.length; i++) {
      if (res[fieldFilter[i]._id] === undefined) {
        continue
      } else {
        result.push({ position: i + 1, name: fieldFilter[i].fieldName, detail: res[fieldFilter[i]._id] });
      }

    }

    return result;

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
