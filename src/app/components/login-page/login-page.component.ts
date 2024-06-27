import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuthRequestService, UserCredentials } from '../../../../output/yml/api';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public signInForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private apiAuth: AuthRequestService,
    private auth: AuthService,
    private router: Router
  ) {
    this.signInForm = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitSignInForm(): void {
    if (this.signInForm?.valid) {
      this.apiAuth.signIn(this.signInForm.value as UserCredentials).subscribe(response => {
        if (response.token != undefined) {
          this.auth.setToken(response.token)
          window.location.href="/home"
        } else {
          alert("Login failed")
        }
      });
    }
  }

}
