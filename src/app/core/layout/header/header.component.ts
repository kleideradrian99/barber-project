import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Menú principal — ajusta rutas si corresponde
  menuItems = [
    { label: 'Explorar', route: '/user/explorar', icon: 'explore' },
    { label: 'Ofertas', route: '/user/ofertas', icon: 'local_offer' },
    { label: 'Barberías', route: '/user/barbers', icon: 'content_cut' },
    { label: 'Perfil', route: '/user/profile', icon: 'account_circle' }
  ];
}
