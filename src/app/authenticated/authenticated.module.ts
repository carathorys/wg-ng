import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent, AuthenticatedLayoutComponent } from './components';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';

@NgModule({
  declarations: [DashboardComponent, AuthenticatedLayoutComponent],
  imports: [CommonModule, AuthenticatedRoutingModule],
  exports: [AuthenticatedRoutingModule],
  entryComponents: [AuthenticatedLayoutComponent],
})
export class AuthenticatedModule {}
