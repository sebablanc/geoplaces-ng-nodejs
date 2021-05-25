import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items/items.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-manipulate-supermercado',
  templateUrl: './manipulate-supermercado.component.html',
  styleUrls: ['./manipulate-supermercado.component.scss']
})
export class ManipulateSupermercadoComponent implements OnInit {

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
