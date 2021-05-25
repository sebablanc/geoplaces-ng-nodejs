import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-caes-home',
  templateUrl: './caes-home.component.html',
  styleUrls: ['./caes-home.component.scss']
})
export class CaesHomeComponent implements OnInit {

  caesList = [];

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getCaesList();
  }

  addClicked(){
    this.routingSrv.goTo(PAGES.MANIPULATE_CAES);
  }

  async getCaesList(){
    let resp = await this.itemsSrv.getItemsListByCategory('caes');
    this.caesList = [];
    if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
      this.caesList = resp.lugares;
    } else {
      alert(resp.messages);
    }
  }

}
