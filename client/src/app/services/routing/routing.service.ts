import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export enum PAGES {
  CERVECERIAS_HOME='cervecerias-home',
  MANIPULATE_CERVECERIA='manipulate-cerveceria',
  UNIVERSIDADES_HOME='universidades-home',
  MANIPULATE_UNIVERSIDADES='manipulate-universidad',
  FARMACIAS_HOME='farmacias-home',
  MANIPULATE_FARMACIAS='manipulate-farmacia',
  CAES_HOME='caes-home',
  MANIPULATE_CAES='manipulate-cae',
  SUPERMERCADOS_HOME='supermercados-home',
  MANIPULATE_SUPERMERCADOS='manipulate-supermercado'
}

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor( private router: Router, private location: Location) { }

  goTo(page: string){
    this.router.navigateByUrl(page);
  }

  goBack(){
    this.location.back();
  }
}
