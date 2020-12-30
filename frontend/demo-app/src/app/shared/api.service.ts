import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Bug } from './bug'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseurl: string = 'http://localhost:8080';
  // Http Headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  public getIssues(): Observable<Bug> {
    return this.http
      .get<Bug>(this.baseurl + '/tracking')
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // Error handling
  private errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
