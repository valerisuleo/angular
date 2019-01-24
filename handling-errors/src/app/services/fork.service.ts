import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { AppError } from '../common/app-error';
import { NotFoundError} from '../common/not-found-error';
import { BadRequestError} from '../common/bad-request-error';
import { throwError } from 'rxjs';


@Injectable()
export class ForkService {

  @Output () interceptor = new EventEmitter<any>();


  // private apiProperties = 'http://localhost:3000/propertys';
  // private apiPosts = 'https://jsonplaceholder.typicode.com/posts';
  private url: string;

  isPropertyServ: string;
  isPostServ: string;

  constructor(
    private http: Http
  ) {}

  refreshContent(args: any) {
    const vm = this;
    // vm.isPropertyServ = args;
    // vm.isPostServ = args;

    if (args === 'homesweethome') {
        vm.url = 'http://localhost:3000/propertys';
    } else if (args === 'post-it') {
      vm.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    vm.interceptor.emit(args);
  }

  // INDEX
  getAll() {
  return this.http.get(this.url)
  .pipe(map(response => response.json()))
}



  // // SHOW
  //   get(id) {
  //     return this.http.get(this.url + `/${id}`)
  //     .pipe(map(response => response.json()));
  //   }
  //
  // NEW
    create(newResource) {
      return this.http.post(this.url, newResource)
      .pipe(map(response => response.json()))
      .pipe(
        catchError((error: Response) => {
          if (error.status === 400) {
              return throwError(new BadRequestError())
          } else {
            return throwError(new AppError(error))
          }
        })
      )
    }

  //   // DELETE
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
