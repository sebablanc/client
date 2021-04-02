import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStep } from 'src/app/pages/inscripciones-gestion/inscripciones-gestion.page';

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
  
  @Input() step: IStep;
  @Output() emitReturn: EventEmitter<boolean> = new EventEmitter();

  action: string = actionsType.LOADING;
  actions = actionsType;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sendData(actionsType.FAIL);
    }, 1000);
  }

  sendData(borrar){
    this.action = borrar;
    if(this.action == actionsType.SUCCESS){
      this.setSuccessButtons();
    } else {
      this.setFailButtons();
    }
  }

  setSuccessButtons(){
    this.step.addToTitle = 'Éxito';
    this.step.rightButton = true;
    this.step.rightButtonConfig = {
      text: 'Continuar',
      rightIcon: 'arrow-forward'
    }
    this.step.onRight = () => { this.emitReturn.emit(true); }
    this.step.leftButton = false;
    this.step.middleButton = true;
    this.step.middleButtonConfig = {
      text: 'Descargar cupón',
      leftIcon: 'cloud-download'
    }
  }

  setFailButtons(){
    this.step.addToTitle = 'Falló';
    this.step.rightButton = true;
    this.step.rightButtonConfig = {
      text: 'Reintentar',
      rightIcon: 'refresh'
    }
    this.step.onRight = () => { this.sendData(actionsType.SUCCESS); };
    this.step.middleButton = false;
    this.step.leftButton = true;
    this.step.leftButtonConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    }

    this.step.onLeft = () => { this.emitReturn.emit(true); }
  }

}
