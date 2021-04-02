import { Component, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';
import { PersonaSingleton } from 'src/app/models/persona/personaSingleton';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IStep } from '../inscripciones-gestion/inscripciones-gestion.page';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.page.html',
  styleUrls: ['./inscripciones.page.scss'],
})
export class InscripcionesPage implements OnInit {
  
  steps: Array<IStep> = [
    {component: 'INSCRIPCIONES_INICIO', addToTitle: '', leftButton: false, middleButton: true, rightButton: true, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: null, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'COMISION_DATOS', addToTitle: 'Datos de la comisión', leftButton: true, middleButton: false, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close-outline'}, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward-outline'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'CONFIRMATION_STEP', addToTitle: '¿Son estos datos correctos?', leftButton: true, middleButton: true, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close-outline'}, middleButtonConfig: {text: 'Atrás', leftIcon: 'arrow-back-outline'}, rightButtonConfig: {text: 'Confirmar', rightIcon: 'checkmark-outline'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: () => { this.changeStep(false) }, onRight:() => { this.changeStep(true) }},
    {component: 'RESULTADO_INSCRIPCION', addToTitle: 'Resultado', leftButton: false, middleButton: false, rightButton: false, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: null, onLeft: () => {}, onMiddle: () => {}, onRight:() => {}}
  ]

  step: IStep = null;
  inscripcion: Inscripcion;

  constructor(private shareSrv: ShareService, private personaSingleton: PersonaSingleton, private personaSrv: PersonaService) { }

  async ngOnInit() {
    this.inscripcion = new Inscripcion();
    this.inscripcion.cambiarFechaInscripcion = new Date();
    let persona = await this.personaSingleton.instance();
    let personaResponse = await this.personaSrv.getPersonaById(persona.getId);
    if(personaResponse && personaResponse.exito && personaResponse.personas && personaResponse.personas.length>0){
      this.inscripcion.cambiarAlumno = personaResponse.personas[0];
    }
    this.step = this.steps[0];
  }

  changeStep(nextStep: boolean){
    let indexOf = this.steps.findIndex(actualStep => {
      return actualStep == this.step;
    });

    //Verificando paso
    switch (indexOf) {
      case 0:
        if((this.inscripcion.obtenerAlumno == null || this.inscripcion.obtenerAlumno == undefined) && nextStep){
          this.shareSrv.presentToast({message: 'No puede realizar esta acción. Verifique que haya cargado sus datos en la sección Mi Perfil', cssClass: 'ERROR_TOAST'});
          return;
        }
        break;
      case 1:
        if((this.inscripcion.obtenerComision == null || this.inscripcion.obtenerComision == undefined) && nextStep) {
          this.shareSrv.presentToast({message: 'Debe seleccionar una comisión para continuar', cssClass: 'ERROR_TOAST'});
          return;
        }
        break;
    }

    if(indexOf> -1 && nextStep && indexOf<this.steps.length-1){
      indexOf++;
    } else if(!nextStep && indexOf>0){
      indexOf--;
    }

    this.step = this.steps[indexOf];
  }

  cargarDatosComision(event: IComisionSend){
    this.inscripcion.cambiarComision = event;
  }

  private returnToInscripciones(){
    location.reload();
  }

}
