import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) {}

  getFriends(): Observable<User[]> {
    return this.http
      .get<User[]>(`api/friends`)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`api/users`)
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
