import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  // Número de WhatsApp al que se enviará el mensaje (incluir código de país sin el +)
  phoneNumber = '573001234567'; // Reemplazar con tu número real: ej. 573001234567 para Colombia
  
  // Mensaje predefinido que aparecerá en WhatsApp
  message = 'Hola, me interesa obtener más información sobre los cursos de belleza del Instituto Madrigal. ¿Podrían ayudarme?';
  
  // Método para abrir WhatsApp con el mensaje predefinido
  openWhatsApp(): void {
    // Codificamos el mensaje para que funcione correctamente en la URL
    const encodedMessage = encodeURIComponent(this.message);
    
    // Creamos la URL de WhatsApp con el número y mensaje
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    
    // Abrimos la URL en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  }
}
