import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.username && this.password) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;  // Alternar visibilidad
  }


  navigateToRegister() {
    this.router.navigate(['/user/register']);
  }
}
