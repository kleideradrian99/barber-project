import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    {
      title: 'Colorimetría',
      description: 'Aprende técnicas avanzadas de coloración, mechas y tratamientos capilares con los mejores profesionales.',
      icon: '🎨'
    },
    {
      title: 'Estilismo Unisex',
      description: 'Domina las últimas tendencias en cortes de cabello para todo tipo de clientes y estilos.',
      icon: '✂️'
    },
    {
      title: 'Barbería',
      description: 'Técnicas profesionales de afeitado, diseño y mantenimiento de barba y bigote.',
      icon: '💈'
    },
    {
      title: 'Manicure y Pedicure',
      description: 'Especialízate en el cuidado, tratamiento y embellecimiento de manos y pies.',
      icon: '💅'
    },
    {
      title: 'Peinados',
      description: 'Crea increíbles peinados para eventos especiales, novias y tendencias de temporada.',
      icon: '👰'
    }
  ];
}
