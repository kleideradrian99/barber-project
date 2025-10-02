import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-barbers',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './user-barbers.component.html',
  styleUrl: './user-barbers.component.scss'
})
export class UserBarbersComponent {
  // datos de ejemplo (reemplaza por tu API)
  heroSlides = [
    { id: 1, title: 'Promo 1', image: 'https://picsum.photos/seed/promo1/800/360' },
    { id: 2, title: 'Promo 2', image: 'https://picsum.photos/seed/promo2/800/360' },
    { id: 3, title: 'Promo 3', image: 'https://picsum.photos/seed/promo3/800/360' }
  ];

  nearby = [
    { id: 'b1', name: 'Destiny Vision', subtitle: 'Barbería • 0.6 km', image: 'https://picsum.photos/seed/destiny/360/240' },
    { id: 'b2', name: 'Free style barber', subtitle: 'Barbería • 1.2 km', image: 'https://picsum.photos/seed/free/360/240' },
    { id: 'b3', name: 'Classic Cuts', subtitle: 'Barbería • 2.0 km', image: 'https://picsum.photos/seed/classic/360/240' }
  ];

  recommended = [
    { id: 'r1', name: 'Top Barber', subtitle: 'Recomendado', image: 'https://picsum.photos/seed/top/360/240' },
    { id: 'r2', name: 'Barber House', subtitle: 'Recomendado', image: 'https://picsum.photos/seed/house/360/240' },
    { id: 'r3', name: 'Urban Cuts', subtitle: 'Recomendado', image: 'https://picsum.photos/seed/urban/360/240' }
  ];

  // estado del slide actual (hero)
  activeHero = 0;

  // para swipe básico: detectar tamaño para layout si es desktop o móvil (opcional)
  isMobile = window.innerWidth <= 600;

  @HostListener('window:resize')
  onResize() { this.isMobile = window.innerWidth <= 600; }

  setActiveHero(i: number) { this.activeHero = i; }

  nextHero() {
    this.activeHero = (this.activeHero + 1) % this.heroSlides.length;
    this.scrollHeroToActive();
  }

  prevHero() {
    this.activeHero = (this.activeHero - 1 + this.heroSlides.length) % this.heroSlides.length;
    this.scrollHeroToActive();
  }

  // desplazar el contenedor hero (simple)
  scrollHeroToActive() {
    const container = document.querySelector<HTMLElement>('.hero-track');
    if (!container) return;
    const slide = container.children[this.activeHero] as HTMLElement;
    if (slide) slide.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
}
