import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService, CommonServicesModule } from './common-services';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonServicesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCommonModule,
    MatProgressSpinnerModule,
    OAuthModule.forRoot(),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
