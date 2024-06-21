import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = AuthService.getToken();

    if (token) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + token
        )
      });
    }
    console.log(req)
    return next(req);
};
