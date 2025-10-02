import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { UserBookingComponent } from '../user-booking/user-booking.component';

@Component({
  selector: 'app-user-barber-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './user-barber-profile.component.html',
  styleUrl: './user-barber-profile.component.scss'
})
export class UserBarberProfileComponent {
  barber = {
    id: 'b1',
    name: 'Destiny Vision',
    address: 'cll 57 ff #22-22',
    hearted: false,
    images: [
      'https://picsum.photos/seed/destiny/900/480',
      'https://picsum.photos/seed/destiny/900/480',
      'https://picsum.photos/seed/destiny/900/480'
    ],
    description: `Lorem Ipsum es simplemente el texto de relleno...`
  };

  services = [
    { id: 's1', name: 'Barba sencilla', price: 10000, desc: '' },
    { id: 's2', name: 'Barba Premium', price: 15000, desc: '' },
    { id: 's3', name: 'Corte para niño', price: 17000, desc: '' }
  ];

  activeImage = 0;

  constructor(
    private snack: MatSnackBar,
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) { }

  // Imagen activa para el hero
  setActiveImage(i: number) { this.activeImage = i; this.scrollHeroToActive(); }

  prevImage() {
    this.activeImage = (this.activeImage - 1 + this.barber.images.length) % this.barber.images.length;
    this.scrollHeroToActive();
  }

  nextImage() {
    this.activeImage = (this.activeImage + 1) % this.barber.images.length;
    this.scrollHeroToActive();
  }

  scrollHeroToActive() {
    const container = document.querySelector<HTMLElement>('.hero-track');
    if (!container) return;
    const slide = container.children[this.activeImage] as HTMLElement;
    if (slide) slide.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }

  toggleHeart() {
    this.barber.hearted = !this.barber.hearted;
    this.snack.open(this.barber.hearted ? 'Añadido a favoritos' : 'Eliminado de favoritos', 'OK', { duration: 1400 });
  }

  goBack() {
    this.router.navigate(['/user/barbers']);
  }

  onBook(service: any) {
    const data = {
      barberId: this.barber.id,
      service: { id: 's1', name: 'Barba sencilla', price: 10000 },
      professionals: ['Profesional 1','Profesional 2','Profesional 3']
    };

    if (window.innerWidth <= 768) {
      const ref = this.bottomSheet.open(UserBookingComponent, { data, panelClass: 'custom-bottom-sheet' });
      ref.afterDismissed().subscribe(result => console.log('sheet closed ->', result));
    } else {
      const dialogRef = this.dialog.open(UserBookingComponent, { data, width: '520px', panelClass: 'custom-dialog' });
      dialogRef.afterClosed().subscribe(result => console.log('dialog closed ->', result));
    }
  }

  // util: formatear precio local (COP)
  formatPrice(value: number) {
    // retorna como "10.000" (sin símbolo) o ajusta a tu preferencia
    return value.toLocaleString('es-CO');
  }



}
