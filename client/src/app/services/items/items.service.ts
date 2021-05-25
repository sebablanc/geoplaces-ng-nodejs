import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private urlSaveItem = '/save_item';
  private urlGetItemsByCategory = '/itemslist_by_category';

  constructor(private httpHlp: HttpHelperService) { }

  saveItem(body: any){
    return this.httpHlp.post({url: this.urlSaveItem, body: body}).then((response)=>{
      return response;
    })
  }

  getItemsListByCategory(category: string){
    return this.httpHlp.get({url: this.urlGetItemsByCategory, body: category}).then((response) =>{
      let lugaresParsed: any[] = [];
      response.lugares.forEach((item: string) => {
        lugaresParsed.push(JSON.parse(item));
      });
      response.lugares = lugaresParsed;
      return response;
    })
  }
}
