import { Component, OnInit } from '@angular/core';

const actionsType = {
  LOADING: 'LOADING',
  FAIL: 'FALLO',
  SUCCESS: 'EXITO'
}

@Component({
  selector: 'app-inscripciones-resultados',
  templateUrl: './inscripciones-resultados.component.html',
  styleUrls: ['./inscripciones-resultados.component.scss'],
})
export class InscripcionesResultadosComponent implements OnInit {

  action: string = actionsType.LOADING;
  actions = actionsType;

  constructor() { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.action = actionsType.FAIL;
    // }, 1000);
  }

}
