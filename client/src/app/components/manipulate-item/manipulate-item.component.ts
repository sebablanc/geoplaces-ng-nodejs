import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputConfig } from 'src/app/ui/input-form/input-form.component';

@Component({
  selector: 'app-manipulate-item',
  templateUrl: './manipulate-item.component.html',
  styleUrls: ['./manipulate-item.component.scss']
})
export class ManipulateItemComponent implements OnInit {
  @Input() categoria: string = '';
  @Output() infoBack: EventEmitter<any> = new EventEmitter();

  form: FormGroup = new FormGroup({
    categoria: new FormControl(this.categoria, {validators: [Validators.required], updateOn: 'change'}),
    nombre: new FormControl(null,{ validators: [Validators.required], updateOn: 'change'}),
    direccion: new FormControl(null, { validators: [Validators.required], updateOn: 'change'}),
    telefono: new FormControl(null, { validators: [], updateOn: 'change'}),
    latitud: new FormControl(null, { validators: [Validators.required], updateOn: 'change'}),
    longitud: new FormControl(null, { validators: [Validators.required], updateOn: 'change'})
  });
  
  nombreConfig: IInputConfig = {form: this.form, formControlName: 'nombre', label: 'Nombre', type: 'text'};
  direccionConfig: IInputConfig = {form: this.form, formControlName: 'direccion', label: 'Dirección', type: 'text'};
  telefonoConfig: IInputConfig = {form: this.form, formControlName: 'telefono', label: 'Teléfono', type: 'text'};
  latitudConfig: IInputConfig = {form: this.form, formControlName: 'latitud', label: 'Latitud', type: 'number'};
  longitudConfig: IInputConfig = {form: this.form, formControlName: 'longitud', label: 'Longitud', type: 'number'};

  constructor() { }

  ngOnInit(): void {
    this.form.controls['categoria'].setValue(this.categoria);
  }

  emitNull(){
    this.back(null);
  }

  emitData(){
    if(this.form.valid){
      this.back(this.form.value);
    } else {
      alert('Faltan rellenar datos');
    }
  }

  back(info: any){
    this.infoBack.emit(info);
  }

  resetForm(){
    this.form.controls.nombre.setValue(null);
    this.form.controls.direccion.setValue(null);
    this.form.controls.telefono.setValue(null);
    this.form.controls.latitud.setValue(null);
    this.form.controls.longitud.setValue(null);
  }

}
