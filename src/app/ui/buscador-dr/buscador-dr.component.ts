import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IInputConfig } from '../input-dr/input-dr.component';

@Component({
  selector: 'app-buscador-dr',
  templateUrl: './buscador-dr.component.html',
  styleUrls: ['./buscador-dr.component.scss'],
})
export class BuscadorDrComponent implements OnInit {
  
  @Input() label: string;
  @Output() textoBuscado: EventEmitter<string> = new EventEmitter();

  form: FormGroup;
  buscarConfig: IInputConfig;
  textoABuscar: string;
  constructor() { }

  ngOnInit() {
    
    this.form = new FormGroup({
      buscar: new FormControl('', { validators: [], updateOn: 'change'})
    });
    this.initConfigs();
  }

  initConfigs(){
    this.buscarConfig = {
      formControlName: 'buscar',
      label: this.label,
      type: 'text',
      form: this.form
    };
  }

  cambiarTexto(event: string){
    this.textoABuscar = event.trim();
    this.textoBuscado.emit(this.textoABuscar);
  }
}
