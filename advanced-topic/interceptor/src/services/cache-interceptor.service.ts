import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { share, tap } from "rxjs/operators";

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {
	private cache: Map<string, HttpResponse<any>> = new Map();
	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (req.method !== "GET") {
			// this.cache.clear();
			return next.handle(req);
		}

		const cachedResponse = this.cache.get(req.url);
		console.log("req.url", req.url);
		console.log("cachedResponse", cachedResponse);

		if (cachedResponse) {
			console.log("cachedResponse PRESENT");
			return of(cachedResponse.clone());
		} else {
			console.log("cachedResponse NOT PRESENT");
			return next.handle(req).pipe(
				tap((stateEvent) => {
					if (stateEvent instanceof HttpResponse) {
						this.cache.set(req.url, stateEvent.clone());
					}
				}),
				share()
			);
		}
	}
}
