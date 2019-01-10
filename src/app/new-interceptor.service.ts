import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // клонирование старого запроса и задание ему новых параметров:
    const request = req.clone({ params: req.params.set('a', 'A')});
    // метод для передачи данных далее:
    return next.handle(req);
  }
}
