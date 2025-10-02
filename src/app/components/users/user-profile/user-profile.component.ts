import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  profileForm!: FormGroup;   // solo declaramos, no inicializamos aquí

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snack: MatSnackBar
  ) { }

  // ejemplo: valores iniciales (simulando carga desde API)
  initialData = {
    name: 'Santiago',
    email: 'santigosierra1115433@correo.itm.edu.co',
    gender: '',
    birthdate: '1999-09-17'
  };

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.initialData.name, [Validators.required, Validators.minLength(2)]],
      email: [{ value: this.initialData.email, disabled: true }, [Validators.required, Validators.email]],
      gender: [this.initialData.gender],
      birthdate: [new Date(this.initialData.birthdate) , Validators.required]
    });
  }

  get f() { return this.profileForm.controls; }

  onSave(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.snack.open('Por favor corrige los errores del formulario', 'OK', { duration: 2500 });
      return;
    }

    const payload = {
      name: this.f.name.value,
      // email está deshabilitado, tomamos el original
      email: this.initialData.email,
      gender: this.f.gender.value,
      birthdate: this.f.birthdate.value
    };

    console.log('Guardar perfil:', payload);
    this.snack.open('Perfil guardado correctamente', 'OK', { duration: 2000 });
  }

  onEditAvatar(): void {
    this.snack.open('Función editar avatar (implementar upload)', 'OK', { duration: 2000 });
  }

  navigateBack() {
    this.router.navigate(['/home']);
  }
}
