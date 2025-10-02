import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registerForm!: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        // patrón: al menos una mayúscula, una minúscula, un número y un carácter especial
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]],
      confirmPassword: ['', [Validators.required]],
      birthdate: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
  }

  // getter para facilitar accesos en template
  get f() {
    return this.registerForm.controls;
  }

  togglePasswordVisibility() { this.passwordVisible = !this.passwordVisible; }
  toggleConfirmPasswordVisibility() { this.confirmPasswordVisible = !this.confirmPasswordVisible; }

  passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    if (pw && cpw && pw !== cpw) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.f.name.value,
      email: this.f.email.value,
      password: this.f.password.value,
      birthdate: this.f.birthdate.value
    };

    // Aquí llamas a tu servicio para crear usuario
    console.log('Registro válido -> payload:', payload);

    // Ejemplo: navegar al login después del registro
    this.router.navigateByUrl('/user/login');
  }

  navigateToLogin() {
    this.router.navigateByUrl('/user/login');
  }

}
