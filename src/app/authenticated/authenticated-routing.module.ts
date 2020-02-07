import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticatedLayoutComponent, DashboardComponent } from './components';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      
    ]),
  ],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
