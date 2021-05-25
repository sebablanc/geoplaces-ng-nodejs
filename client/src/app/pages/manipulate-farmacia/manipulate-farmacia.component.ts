import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-manipulate-farmacia',
  templateUrl: './manipulate-farmacia.component.html',
  styleUrls: ['./manipulate-farmacia.component.scss']
})
export class ManipulateFarmaciaComponent implements OnInit {

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
