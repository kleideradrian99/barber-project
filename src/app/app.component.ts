import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { WhatsappButtonComponent } from './shared/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, WhatsappButtonComponent],
  template: `
    <app-main-layout></app-main-layout>
    <!-- <app-whatsapp-button></app-whatsapp-button> -->
  `
})
export class AppComponent {
  title = 'madrigal-project';
}
