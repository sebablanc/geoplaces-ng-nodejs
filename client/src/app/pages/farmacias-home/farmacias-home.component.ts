import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-farmacias-home',
  templateUrl: './farmacias-home.component.html',
  styleUrls: ['./farmacias-home.component.scss']
})
export class FarmaciasHomeComponent implements OnInit {

  farmaciasList = [];

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getFarmaciasList();
  }

  addClicked(){
    this.routingSrv.goTo(PAGES.MANIPULATE_FARMACIAS);
  }

  async getFarmaciasList(){
    let resp = await this.itemsSrv.getItemsListByCategory('farmacias');
    this.farmaciasList = [];
    if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
      this.farmaciasList = resp.lugares;
    } else {
      alert(resp.messages);
    }
  }
}
