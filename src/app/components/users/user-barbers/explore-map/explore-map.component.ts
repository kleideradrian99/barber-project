import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import * as L from 'leaflet';

type PlaceItem = { id: string; name: string; lat: number; lng: number; snippet?: string };

@Component({
  selector: 'app-explore-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-map.component.html',
  styleUrls: ['./explore-map.component.scss']
})
export class ExploreMapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([6.25184, -75.56359], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    

    L.marker([6.25184, -75.56359])
      .addTo(this.map)
      .bindPopup('Barberia de Prueba 💈')
      .openPopup();
  }


}
