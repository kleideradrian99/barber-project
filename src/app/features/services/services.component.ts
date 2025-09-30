import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgFor, NgClass } from '@angular/common';
import { CourseDetailDialogComponent } from '../../shared/course-detail-dialog/course-detail-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatCardModule, 
    MatButtonModule, 
    MatTabsModule, 
    MatIconModule, 
    MatDialogModule,
    NgFor, 
    NgClass,
    RouterLink,
    CourseDetailDialogComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private dialog: MatDialog) {}
  
  openCourseDetails(course: any): void {
    this.dialog.open(CourseDetailDialogComponent, {
      width: '800px',
      data: course,
      panelClass: 'course-detail-dialog'
    });
  }
  
  courses = [
    {
      title: 'Colorimetría Profesional',
      level: 'Intermedio-Avanzado',
      duration: '6 meses',
      description: 'Aprende las técnicas más avanzadas de coloración, mechas, balayage, y tratamientos capilares. Domina la teoría del color y realiza diagnósticos profesionales.',
      topics: [
        'Colores primarios',
        'Colores secundarios',
        'Colores terciarios',
        'Colores subyacentes',
        'Creación de tus propios colores',
        'Colores fantasía',
        'Correcta aplicación de canas',
        'Técnicas de gorro',
        'Técnicas de balayage',
        'Técnicas de mechas',
        'Ultimas técnicas brasileñas'
      ],
      image: 'assets/colorimetria.jpg'
    },
    {
      title: 'Estilismo y Corte Unisex',
      level: 'Básico-Avanzado',
      duration: '8 meses (más un mes gratis)',
      description: 'Curso completo de corte de cabello y técnicas de peinado para todo tipo de clientes. Desde los fundamentos básicos hasta las técnicas más avanzadas.',
      topics: [
        'Entorno del cabello',
        'Masaje capilar',
        'Brushing y planchado',
        'Peinados',
        'Rulos',
        'Trenzas',
        'Corte dama',
        'Corte varón',
        'Visagismo',
        'Colorimetría (básica)',
        'Aplicación de productos',
        'Texturizados'
      ],
      image: 'assets/estilismo.jpg'
    },
    {
      title: 'Barbería Profesional',
      level: 'Básico-Avanzado',
      duration: '6 meses',
      description: 'Conviértete en un maestro barbero con este curso completo. Aprenderás desde técnicas de corte hasta gestión de tu negocio, con énfasis en tendencias actuales y atención al cliente.',
      topics: [
        'Técnicas de corte y estilo (cortes clásicos, fade, degradados)',
        'Manejo de tijeras, máquinas de corte y navajas',
        'Visagismo y adaptación del corte al rostro',
        'Afeitado con navaja y técnicas de precisión',
        'Diseño y mantenimiento de barbas y bigotes',
        'Uso de productos para cabello y barba',
        'Higiene y bioseguridad',
        'Atención al cliente y gestión del negocio'
      ],
      topicsDetailed: [
        {
          category: 'Técnicas de corte y estilo',
          subtopics: [
            'Cortes clásicos y tendencias actuales para cabello',
            'Uso de tijeras, máquinas de corte y navajas',
            'Aplicación de técnicas como el fade, cortes degradados y conexiones',
            'Visagismo: adaptación del corte al rostro del cliente',
            'Secado y modelado del cabello'
          ]
        },
        {
          category: 'Diseño y cuidado de barba y bigote',
          subtopics: [
            'Afeitado preciso con navaja y técnicas adecuadas',
            'Diseño y mantenimiento de barbas y bigotes',
            'Asesoría personalizada sobre estilos y cuidado'
          ]
        },
        {
          category: 'Herramientas y productos',
          subtopics: [
            'Identificación y manejo de herramientas esenciales: máquinas, tijeras, navajas, peines, etc.',
            'Conocimiento de productos para cabello y barba (shampoo, cera, lociones, etc.)'
          ]
        },
        {
          category: 'Higiene y bioseguridad',
          subtopics: [
            'Protocolos de limpieza y desinfección del área de trabajo y herramientas',
            'Prevención de infecciones y cuidados con la piel'
          ]
        },
        {
          category: 'Atención al cliente y gestión del negocio',
          subtopics: [
            'Comunicación efectiva y establecimiento de confianza con los clientes',
            'Creación de un sistema de atención al cliente y estrategias para atraer y retener clientes',
            'Conocimiento de la historia de la barbería y diferencias con otros profesionales del cabello'
          ]
        }
      ],
      image: 'assets/barberia.jpg'
    },
    {
      title: 'Manicure y Pedicure',
      level: 'Básico-Intermedio',
      duration: '60 horas',
      description: 'Curso especializado en el cuidado, tratamiento y embellecimiento de manos y pies. Incluye técnicas de esmalte semipermanente.',
      topics: [
        'Técnicas de manicure rusa y tradicional',
        'Esmalte semipermanente y gel',
        'Diseño y nail art',
        'Spa de manos y pies'
      ],
      image: 'assets/manicure.jpg'
    },
    {
      title: 'Peinados para Eventos',
      level: 'Intermedio',
      duration: '50 horas',
      description: 'Aprende a crear increíbles peinados para toda ocasión: bodas, graduaciones, fiestas y eventos especiales.',
      topics: [
        'Técnicas de trenzado avanzado',
        'Recogidos clásicos y modernos',
        'Peinados para novias',
        'Ondas y volúmenes para eventos'
      ],
      image: 'assets/peinados.jpg'
    }
  ];
}
