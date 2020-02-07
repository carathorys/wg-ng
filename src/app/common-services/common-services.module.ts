import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressBarModule,
} from '@angular/material';

import { LoadingComponent, NoContentComponent, WelcomeComponent } from './components';
import { AuthGuardService } from './services';

@NgModule({
  declarations: [LoadingComponent, NoContentComponent, WelcomeComponent],
  providers: [AuthGuardService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  exports: [LoadingComponent, NoContentComponent, WelcomeComponent],
})
export class CommonServicesModule {}
