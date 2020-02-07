import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthService } from '../auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanLoad {
  constructor(private readonly authService: AuthService) {
  }

  public async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    const isLoggedIn = await this.authService.IsLoggedIn();
    if (isLoggedIn) {
      return true;
    }
    await this.authService.initiateLoginSequence(segments);

    return false;
  }
}
