import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private readonly authService: AuthService) {
  }

  public async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean> {
    const isLoggedIn = await this.authService.IsLoggedIn();
    if (isLoggedIn) {
      return true;
    }
    await this.authService.logIn(state);

    return false;
  }
}
