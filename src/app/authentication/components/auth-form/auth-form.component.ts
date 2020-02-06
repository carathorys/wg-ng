import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl, Validators, FormGroup } from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.pug',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get password() {
    return this.loginForm.get('password');
  }
  get email() {
    return this.loginForm.get('email');
  }

  matcher = new MyErrorStateMatcher();
}
