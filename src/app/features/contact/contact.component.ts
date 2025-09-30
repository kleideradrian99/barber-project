import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule, 
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  
  courses = [
    'Colorimetría Profesional',
    'Estilismo y Corte Unisex',
    'Barbería Profesional',
    'Manicure y Pedicure',
    'Peinados para Eventos'
  ];
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{8,10}$")]],
      course: ['', Validators.required],
      message: ['', Validators.maxLength(500)]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      this.contactForm.reset();
    } else {
      // Marcar todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
