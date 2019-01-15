import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IJob } from '../jobs-msgw/job';
import { IJoblog } from '../joblog/joblog';

export interface HttpRequest<T> {
  response: T[];
  returnValue: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {

constructor(private http: HttpClient) { }

 private jobtUrl = 'https://croas01:44333/web/services/getErrorMsgList';
 private jobLogtUrl = 'https://croas01:44333/web/services/GetErrorMsgJobLog/';

 //private jobtUrl = `${environment.jobPath}getErrorMsgList`;
 //private jobLogtUrl = `${environment.jobPath}GetErrorMsgJobLog/`;

 getJobs(): Observable<HttpRequest<IJob>> {
  return this.http.get<HttpRequest<IJob>>(this.jobtUrl).pipe(
    //tap(packet => console.log(packet.returnValue)),
    //tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError)
  );
}

getJobLog(job: string): Observable<HttpRequest<IJoblog>> {
  return this.http.get<HttpRequest<IJoblog>>(`${this.jobLogtUrl}${job}`).pipe(
    //tap(packet => console.log(packet.returnValue)),
    //tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError)
  );
}


private handleError(err: HttpErrorResponse) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

}
