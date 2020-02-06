import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuardService , NoContentComponent } from './common-services';


@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          canActivate: [AuthGuardService],
          loadChildren: './authenticated/authenticated.module#AuthenticatedModule',
        },
        {
          path: 'authentication',
          pathMatch: 'prefix',
          loadChildren: './authentication/authentication.module#AuthenticationModule'
        },
        {
          path: 'unauthorized',
          pathMatch: 'prefix',
          loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule'
        },
        {
          path: 'not-found',
          component: NoContentComponent
        },
        { path: '**', redirectTo: 'not-found' }
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
