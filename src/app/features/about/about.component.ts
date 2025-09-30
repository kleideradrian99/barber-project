import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  instructors = [
    {
      name: 'María Rodríguez',
      position: 'Directora y Especialista en Colorimetría',
      bio: 'Con más de 15 años de experiencia en el mundo de la belleza, María ha formado a cientos de estilistas que hoy trabajan en los mejores salones.',
      img: 'assets/instructor1.jpg'
    },
    {
      name: 'Carlos Mendoza',
      position: 'Maestro Barbero',
      bio: 'Reconocido internacionalmente por sus técnicas de barbería moderna, Carlos ha ganado múltiples premios en competencias internacionales.',
      img: 'assets/instructor2.jpg'
    },
    {
      name: 'Laura Sánchez',
      position: 'Especialista en Manicure y Pedicure',
      bio: 'Con formación en Europa y Asia, Laura domina las últimas tendencias en nail art y tratamientos para manos y pies.',
      img: 'assets/instructor3.jpg'
    }
  ];
  
  values = [
    {
      title: 'Excelencia',
      description: 'Buscamos la perfección en cada técnica que enseñamos, con los más altos estándares de calidad.',
      icon: 'star'
    },
    {
      title: 'Innovación',
      description: 'Nos mantenemos actualizados con las últimas tendencias y técnicas del mundo de la belleza.',
      icon: 'lightbulb'
    },
    {
      title: 'Compromiso',
      description: 'Trabajamos con pasión para formar a los mejores profesionales del sector de la belleza.',
      icon: 'handshake'
    },
    {
      title: 'Profesionalismo',
      description: 'Nuestros instructores son expertos reconocidos con amplia experiencia en la industria.',
      icon: 'school'
    }
  ];
}
