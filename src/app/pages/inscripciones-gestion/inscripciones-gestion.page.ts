import { Component, OnInit } from '@angular/core';
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
    {component: 'INSCRIPCIONES_INICIO', addToTitle: '', leftButton: false, middleButton: true, rightButton: true, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: null, onMiddle: null, onRight:() => { this.changeStep() }},
    {component: 'ALUMNOS_DATOS', addToTitle: 'Datos de alumno', leftButton: true, middleButton: false, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close-outline'}, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: null, onMiddle: null, onRight:() => { console.log('se ejecuta right'); }}
  ]

  step: IStep = null;

  constructor() { }

  ngOnInit() {
    this.step = this.steps[0];
  }

  changeStep(){
    debugger;
    let indexOf = this.steps.findIndex(actualStep => {
      return actualStep == this.step;
    });

    if(indexOf> -1){
      this.step = this.steps[++indexOf];
    }
  }

  cargarDatosAlumno(event: IPersonaSend){
    //TODO: CARGAR DATOS ALUMNOS EN LA ENTIDAD DE INSCRIPCION
    console.log('cargarDatosAlumno');
    console.log(event);
  }
}
