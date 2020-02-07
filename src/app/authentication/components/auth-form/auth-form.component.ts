import { Component } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { AuthService } from 'src/app/common-services';
import { Router } from '@angular/router';

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
  matcher = new MyErrorStateMatcher();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  /**
   *
   */
  constructor(private readonly authService: AuthService, private readonly router: Router) {
    console.log(this.router.routerState);
  }

  get password() {
    return this.loginForm.get('password');
  }
  get email() {
    return this.loginForm.get('email');
  }

  async onSubmit() {
    if (this.loginForm.valid === true) {
      const success = await this.authService.doLogin(
        this.loginForm.get('email').value,
        this.loginForm.get('password').value,
      );
      if (success === true) {
        await this.router.navigate(['/u']);
      }
    }
  }
}
