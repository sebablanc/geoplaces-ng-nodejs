import { Injectable } from '@angular/core';
import { HttpHelperService } from '../http/http-helper.service';

export const NEAREST_KM = 1.1;

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private urlSaveItem = '/save_item';
  private urlGetItemsByCategory = '/itemslist_by_category';
  private urlGetNearestItems = '/nearest_places_by_distance';
  
  constructor(private httpHlp: HttpHelperService) { }

  async saveItem(body: any){
    const response = await this.httpHlp.post({ url: this.urlSaveItem, body: body });
    return response;
  }

  async getItemsListByCategory(category: string){
    const response = await this.httpHlp.get({ url: this.urlGetItemsByCategory, body: {category: category} });
    response.lugares = response.lugares.sort((a: any, b: any) => {
      if (a['nombre'] > b['nombre']) {
        return 1;
      } else if (a['nombre'] < b['nombre']) {
        return -1;
      } else {
        return 0;
      }
    });
    return response;
  }

  async getNearestItems(lat: number, lng: number){
    const response = await this.httpHlp.get({url: this.urlGetNearestItems, body: {latitude: lat, longitude: lng, distance: NEAREST_KM}});
    return response;
  }
}
