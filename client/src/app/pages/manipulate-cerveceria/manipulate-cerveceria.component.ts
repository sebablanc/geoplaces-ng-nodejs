import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-manipulate-cerveceria',
  templateUrl: './manipulate-cerveceria.component.html',
  styleUrls: ['./manipulate-cerveceria.component.scss']
})
export class ManipulateCerveceriaComponent implements OnInit {

  constructor(private routingSrv: RoutingService, private itemsSrv: ItemsService) { }

  ngOnInit(): void {
  }

  async verifyData(event: any){
    if(!event){
      this.routingSrv.goBack();
    } else {
      let resp = await this.itemsSrv.saveItem(event);
      this.verifyResponse(resp);
    }
  }

  verifyResponse(response: any){
    if(response){
      alert(response.message)
    }
  }

}
