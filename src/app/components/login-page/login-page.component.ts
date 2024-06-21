import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatSelectModule, MatCardModule, MatButton],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  public signInForm: FormGroup;

  constructor(
    formBuilder: FormBuilder
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
      console.log('Form data:', this.signInForm.value);
    }
  }

}
