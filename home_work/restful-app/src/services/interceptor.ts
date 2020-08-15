import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getJwt()}`
            }
        });

        return next.handle(req);
    }
}


