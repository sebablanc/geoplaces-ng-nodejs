import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-supermercados-home',
  templateUrl: './supermercados-home.component.html',
  styleUrls: ['./supermercados-home.component.scss']
})
export class SupermercadosHomeComponent implements OnInit {

  supermercadosList = [];

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getSupermercadosList();
  }

  addClicked(){
    this.routingSrv.goTo(PAGES.MANIPULATE_SUPERMERCADOS);
  }

  async getSupermercadosList(){
    let resp = await this.itemsSrv.getItemsListByCategory('supermercados');
    this.supermercadosList = [];
    if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
      this.supermercadosList = resp.lugares;
    } else {
      alert(resp.messages);
    }
  }
}
