import { Component, OnInit } from '@angular/core';
import { PAGES, RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  pages = PAGES;

  constructor(private routingSrv: RoutingService) { }

  ngOnInit(): void {
  }

  goTo(link: string){
    this.routingSrv.goTo(link);
  }

}
