// 2. In order to do that we are going to use an 'observable' operator called 'map operator': We can transform the items in observable.

import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError} from '../common/not-found-error';
import { BadRequestError} from '../common/bad-request-error';
import { throwError } from 'rxjs';




@Injectable()
export class DataService {
  // private url;

  constructor(private url: string,  private http: Http) {}

// INDEX
  getAll() {
    return this.http.get(this.url)
    .pipe(map(response => response.json()))
  }

// SHOW
  get(id) {
    return this.http.get(this.url + `/${id}`)
    .pipe(map(response => response.json()));
  }

// NEW
  create(newResource) {
    return this.http.post(this.url, newResource)
    .pipe(map(response => response.json()))
  }

  // DELETE
  delete(resource) {
    // return this.http.delete(this.url + `/${resource.id}`)
    return this.http.delete(this.url + "5c294330e8fbd178fe22081b")
    .pipe(
      catchError((error: Response) => {
        if (error.status === 404) {
            return throwError(new NotFoundError())
        } else {
          return throwError(new AppError(error))
        }
      })
    )
  }
  
}
