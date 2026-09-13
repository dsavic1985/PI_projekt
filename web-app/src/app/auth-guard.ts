import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  var promise = authService.isAuthenticated()
    .then(authenticated => {
      if (authenticated)
        return true;
      
      return router.parseUrl('/login');
    });

  return promise;
};
