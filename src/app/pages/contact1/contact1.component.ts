import * as L from 'leaflet';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements OnInit, AfterViewInit {

  constructor(private translateService: TranslateService, private toastr: ToastrService) {
    
  }

  banner : any;

  private map : any;

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      iconUrl: 'assets/images/leaflet/marker-icon.png',
      shadowUrl: 'assets/images/leaflet/marker-shadow.png'
    })
  };

  ngOnInit(): void {
    this.banner = {
      pagetitle: 'contacte.contactar',
      bg_image: "4.jpg",
      title: 'contacte.contactar',
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    //configuración del mapa
    this.map = L.map('map', {
      center: [40.54004, 0.47642],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    let nom = this.translateService.instant('venturaSimo');
    let adrecaCarrer = this.translateService.instant('contacte.adrecaCarrer');
    let adrecaPoblacio = this.translateService.instant('contacte.adrecaPoblacio');

    let adrecaFormatada = "<b>" + nom + "</b><br>" + adrecaCarrer + "<br>" + adrecaPoblacio;
    const marker = L.marker([40.54004, 0.47642], this.icon).addTo(this.map);
    marker.bindPopup(adrecaFormatada).openPopup();


  }

  sendMessage() {
    this.toastr.error(this.translateService.instant('contacte.formulari.error.missatge'), this.translateService.instant('contacte.formulari.error.titol'));
  }

}
