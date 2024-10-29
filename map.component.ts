import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  initialCenter: L.LatLng = new L.LatLng(52.237049, 21.017532); 
  private map!: L.Map;
  private currentZoom: number = 18;

  private markersLayer = L.layerGroup();

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = L.map('map', {
      center: this.initialCenter,
      zoom: this.currentZoom,
      minZoom: 16,
      maxZoom: 18
    });

    // Dodanie warstwy mapy
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Dodanie kontrolki wyszukiwania
    // const geocoder = (L as any).Control.Geocoder.nominatim();
    // (L as any).Control.geocoder({
    //   geocoder: geocoder,
    //   defaultMarkGeocode: false
    // })
    // .on('markgeocode', (e: any) => {
    //   const { center } = e.geocode;
    //   this.map.setView(center, this.currentZoom);
    // })
    // .addTo(this.map);

    // Dodanie warstwy znaczników
    this.markersLayer.addTo(this.map);

    // Nasłuchiwanie zdarzeń mapy
    // this.map.on('zoomend', () => {
    //   this.handleZoomChange();
    // });

    // this.map.on('moveend', () => {
    //   this.loadMarkersForVisibleArea();
    // });

    // // Pierwsze załadowanie znaczników
    // this.loadMarkersForVisibleArea();
  }
}
