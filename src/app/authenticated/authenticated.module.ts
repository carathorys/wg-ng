import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components';
import { AuthenticatedRoutingModule } from './authenticated-routiung.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, AuthenticatedRoutingModule],
  exports: [AuthenticatedRoutingModule],
})
export class AuthenticatedModule {}
