import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {
  @Output() addCardClicked: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

}
