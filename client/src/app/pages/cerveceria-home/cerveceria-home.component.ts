import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-cerveceria-home',
  templateUrl: './cerveceria-home.component.html',
  styleUrls: ['./cerveceria-home.component.scss']
})
export class CerveceriaHomeComponent implements OnInit {

  cerveceriasList = [];

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getCerveceriasList();
  }

  addClicked(){
    this.routingSrv.goTo(PAGES.MANIPULATE_CERVECERIA);
  }

  async getCerveceriasList(){
    let resp = await this.itemsSrv.getItemsListByCategory('cervecerias');
    this.cerveceriasList = [];
    if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
      this.cerveceriasList = resp.lugares;
    } else {
      alert(resp.messages);
    }
  }

}
