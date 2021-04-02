import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';
import { InscripcionResponse } from 'src/app/models/inscripcion/inscripcionResponse';
import { IStep } from 'src/app/pages/inscripciones-gestion/inscripciones-gestion.page';
import { InscripcionService } from 'src/app/services/inscripcion/inscripcion.service';

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
  @Input() inscripcion: Inscripcion;
  @Output() emitReturn: EventEmitter<boolean> = new EventEmitter();

  action: string = actionsType.LOADING;
  actions = actionsType;

  constructor(private inscripcionSrv: InscripcionService) { }

  async ngOnInit() {
    await this.sendData();
  }
  
  async sendData(){
    let inscripcionToSend = this.inscripcionSrv.parseInscripcionToInscripcionSend(this.inscripcion);
    console.log(inscripcionToSend);
    
    let response = await this.inscripcionSrv.guardarInscripcion(inscripcionToSend);
    this.action = response && response.exito ? actionsType.SUCCESS : actionsType.FAIL;
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
    this.step.onRight = () => { this.sendData(); };
    this.step.middleButton = false;
    this.step.leftButton = true;
    this.step.leftButtonConfig = {
      text: 'Cancelar',
      leftIcon: 'close'
    }

    this.step.onLeft = () => { this.emitReturn.emit(true); }
  }

}
