import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSessionService } from 'src/app/login/services/app-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionService: AppSessionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.sessionService.getJWTToken();
    console.log('in auth interceptor');
    if (token) {
      console.log('cloning request');
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}


// if (idToken) {
//   const cloned = req.clone({
//       headers: req.headers.set("Authorization", "Bearer " + idToken)
//   });

//   return next.handle(cloned);
// }
// else {
//   return next.handle(req);
// }
// }

// 