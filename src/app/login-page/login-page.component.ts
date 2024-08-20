import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {LoginPageService} from "./login-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInput
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private loginService = inject(LoginPageService);
  private router = inject(Router);
  loginForm = new FormGroup({
    'name' : new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  onSubmit() {
    const userName = this.loginForm.value.name;
    if (typeof userName === 'string') {
      this.loginService.setUserName(userName)
      this.router.navigate(['book']);
    }
    this.loginForm.reset();
  }

  get formIsValid(): boolean {
    return (this.loginForm.invalid && this.loginForm.touched)
  }
}
