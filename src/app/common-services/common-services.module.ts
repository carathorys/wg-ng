import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
} from '@angular/material';


import { LoadingComponent, NoContentComponent } from './components';
import { AuthGuardService } from './services';

@NgModule({
  declarations: [LoadingComponent, NoContentComponent],
  providers: [AuthGuardService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  exports: [
    LoadingComponent,
    NoContentComponent
  ],
})
export class CommonServicesModule {}
