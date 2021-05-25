import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-universidades-home',
  templateUrl: './universidades-home.component.html',
  styleUrls: ['./universidades-home.component.scss']
})
export class UniversidadesHomeComponent implements OnInit {

  universidadesList = [];

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
    this.getUniversidadesList();
  }

  addClicked(){
    this.routingSrv.goTo(PAGES.MANIPULATE_UNIVERSIDADES);
  }

  async getUniversidadesList(){
    let resp = await this.itemsSrv.getItemsListByCategory('universidades');
    this.universidadesList = [];
    if(resp && resp.exito && resp.lugares && resp.lugares.length >= 0){
      console.log(this.universidadesList);
      
      this.universidadesList = resp.lugares;
    } else {
      alert(resp.messages);
    }
  }
}
