import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './service/auth.service';
import { RouterService } from './service/router.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth:AuthService=inject(AuthService);
  const router:RouterService=inject(RouterService);
  const status=auth.getStatus();
  if(status){
    return true;
  }
else{
  router.navigateToLoginView()
  return false;
}
};
