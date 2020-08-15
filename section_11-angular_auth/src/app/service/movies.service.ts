import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService extends DataService {

    constructor(authHttp: AuthHttp, http: Http) {
        super(`${environment.servicesHost}/movies`, http, authHttp);
    }
}
