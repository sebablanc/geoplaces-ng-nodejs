import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { IconName } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  
  @Input() config: IInputConfig = {
    form: new FormGroup({}),
    formControlName: '',
    label: '',
    type: '',
    prefixIcon: undefined,
    suffixIcon: undefined,
    readOnly: false
  };
  @Output('suffixIconClicked') suffixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('prefixIconClicked') prefixIconClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('dataEmit') dataEmit: EventEmitter<any> = new EventEmitter();
  @Output('dataEmitKey') dataEmitKey: EventEmitter<any> = new EventEmitter();
  
  field: AbstractControl;
  constructor() {
    this.field = this.config && this.config.form ? this.config.form.controls[this.config.formControlName] : this.config.form.controls[''];
  }

  ngOnInit() {
    if(this.config && this.config.form){
      this.field = this.config.form.controls[this.config.formControlName];
    }
  }

}

export interface IInputConfig {
  form: FormGroup;
  formControlName: string;
  label: string;
  type: string;
  prefixIcon?: IconName;
  suffixIcon?: IconName;
  readOnly?: boolean;
}