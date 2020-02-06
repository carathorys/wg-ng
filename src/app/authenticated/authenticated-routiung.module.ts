import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      { path: '**', redirectTo: '' },
    ]),
  ],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
