import { Component, OnInit } from '@angular/core';
import { ItemsService, NEAREST_KM } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-tengo-cerca-home',
  templateUrl: './tengo-cerca-home.component.html',
  styleUrls: ['./tengo-cerca-home.component.scss']
})
export class TengoCercaHomeComponent implements OnInit {

  tengoCercaLista = [];
  tengoCercaCerveceriasLista: any[] = [];
  tengoCercaUniversidadesLista: any[] = [];
  tengoCercaFarmaciasLista: any[] = [];
  tengoCercaCaesLista: any[] = [];
  tengoCercaSupermercadosLista: any[] = [];

  kms = NEAREST_KM;

  constructor(private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getNearestItems();
  }

  async getNearestItems(){
    navigator.geolocation.getCurrentPosition( async locationResp => {
      let resp = await this.itemsSrv.getNearestItems(locationResp.coords.latitude, locationResp.coords.longitude);
    
      this.resetLists();

      if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
        this.tengoCercaLista = resp.lugares;
        this.tengoCercaLista.forEach(item => {
          this.splitToOtherLists(item);
        })
      } else {
        alert(resp.messages);
      }
    });
    
  }

  resetLists(){
    this.tengoCercaCerveceriasLista = [];
    this.tengoCercaCaesLista = [];
    this.tengoCercaFarmaciasLista = [];
    this.tengoCercaLista = [];
    this.tengoCercaSupermercadosLista = [];
    this.tengoCercaUniversidadesLista = [];
  }

  splitToOtherLists(item: any){
    switch (item.categoria) {
      case 'cervecerias':
        this.tengoCercaCerveceriasLista.push(item);
        break;
      case 'caes':
        this.tengoCercaCaesLista.push(item);
        break;
      case 'farmacias':
        this.tengoCercaFarmaciasLista.push(item);
        break;
      case 'supermercados':
        this.tengoCercaSupermercadosLista.push(item);
        break;
      case 'universidades':
        this.tengoCercaUniversidadesLista.push(item);
        break;
    }
  }
}