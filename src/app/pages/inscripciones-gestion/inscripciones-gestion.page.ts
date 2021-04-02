import { Component, OnInit } from '@angular/core';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

interface IStep{
  component: string;
  addToTitle: string;
  leftButton: boolean;
  middleButton: boolean;
  rightButton: boolean;
  leftButtonConfig: IRoundedButtonConfig;
  middleButtonConfig: IRoundedButtonConfig;
  rightButtonConfig: IRoundedButtonConfig;
  onLeft();
  onMiddle();
  onRight();
}

@Component({
  selector: 'app-inscripciones-gestion',
  templateUrl: './inscripciones-gestion.page.html',
  styleUrls: ['./inscripciones-gestion.page.scss'],
})
export class InscripcionesGestionPage implements OnInit {

  steps: Array<IStep> = [
    {component: 'INSCRIPCIONES_INICIO', addToTitle: '', leftButton: false, middleButton: true, rightButton: true, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: null, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'ALUMNO_DATOS', addToTitle: 'Datos del alumno', leftButton: true, middleButton: false, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close-outline'}, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'COMISION_DATOS', addToTitle: 'Datos de la comisión', leftButton: true, middleButton: true, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close-outline'}, middleButtonConfig: {text: 'Atrás', leftIcon: 'arrow-back-outline'}, rightButtonConfig: {text: 'Confirmar', rightIcon: 'checkmark-outline'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: () => { this.changeStep(false) }, onRight:() => { console.log('se ejecuta right'); }}
  ]

  step: IStep = null;

  constructor() { }

  ngOnInit() {
    this.step = this.steps[0];
  }

  changeStep(nextStep: boolean){
    let indexOf = this.steps.findIndex(actualStep => {
      return actualStep == this.step;
    });

    if(indexOf> -1 && nextStep && indexOf<this.steps.length-1){
      indexOf++;
    } else if(!nextStep && indexOf>0){
      indexOf--;
    }

    this.step = this.steps[indexOf];
  }

  cargarDatosAlumno(event: IPersonaSend){
    //TODO: CARGAR DATOS ALUMNOS EN LA ENTIDAD DE INSCRIPCION
    console.log('cargarDatosAlumno');
    console.log(event);
  }

  cargarDatosComision(event: IComisionSend){
    //TODO: CARGAR DATOS COMISION EN LA ENTIDAD DE INSCRIPCION
    console.log('cargarDatosComision');
    console.log(event);
  }

  private returnToInscripciones(){
    location.reload();
  }
}
