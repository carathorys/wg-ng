import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService, NoContentComponent, WelcomeComponent } from './common-services';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: WelcomeComponent,
        },
        {
          path: 'u',
          pathMatch: 'prefix',
          canLoad: [AuthGuardService],
          loadChildren: './authenticated/authenticated.module#AuthenticatedModule',
        },
        {
          path: 'auth',
          pathMatch: 'prefix',
          loadChildren: './authentication/authentication.module#AuthenticationModule',
        },
        {
          path: 'unauthorized',
          pathMatch: 'prefix',
          loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule',
        },
        {
          path: 'not-found',
          component: NoContentComponent,
        },
        { path: '**', component: NoContentComponent },
      ],
      {
        initialNavigation: true,
        useHash: false,
      },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
