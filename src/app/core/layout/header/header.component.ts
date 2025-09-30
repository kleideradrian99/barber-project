import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    RouterLink, 
    RouterLinkActive,
    MatMenuModule, 
    MatDividerModule,
    NgFor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Inicio', route: '/home' },
    { label: 'El Instituto', route: '/about' },
    { label: 'Nuestros Cursos', route: '/services' },
    { label: 'Inscripciones', route: '/contact' }
  ];
}
