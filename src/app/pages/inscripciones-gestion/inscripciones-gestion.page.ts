import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BuscadorOneSelectorModalComponent } from 'src/app/components/web/buscador-one-selector-modal/buscador-one-selector-modal.component';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { CursoService } from 'src/app/services/curso/curso.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

export interface IStep{
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
    {component: 'INSCRIPCIONES_INICIO', addToTitle: '', leftButton: false, middleButton: true, rightButton: true, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward'}, onLeft: null, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'ALUMNO_DATOS', addToTitle: 'Datos del alumno', leftButton: true, middleButton: false, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close'}, middleButtonConfig: null, rightButtonConfig: {text: 'Siguiente', rightIcon: 'arrow-forward'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: null, onRight:() => { this.changeStep(true) }},
    {component: 'COMISION_DATOS', addToTitle: 'Datos de la comisi??n', leftButton: true, middleButton: true, rightButton: true, leftButtonConfig: {text: 'Cancelar', leftIcon: 'close'}, middleButtonConfig: {text: 'Atr??s', leftIcon: 'arrow-back'}, rightButtonConfig: {text: 'Confirmar', rightIcon: 'checkmark'}, onLeft: () => { this.returnToInscripciones() }, onMiddle: () => { this.changeStep(false) }, onRight:() => { this.changeStep(true) }},
    {component: 'RESULTADO_INSCRIPCION', addToTitle: 'Resultado', leftButton: false, middleButton: false, rightButton: false, leftButtonConfig: null, middleButtonConfig: null, rightButtonConfig: null, onLeft: () => {}, onMiddle: () => {}, onRight:() => {}}
  ]

  step: IStep = null;
  inscripcion: Inscripcion;

  constructor(private shareSrv: ShareService, private modalCtrl: ModalController, private cursoSrv: CursoService, private navCtrl: NavController) { }

  ngOnInit() {
    this.inscripcion = new Inscripcion();
    this.inscripcion.cambiarFechaInscripcion = new Date();
    this.step = this.steps[0];
  }

  changeStep(nextStep: boolean){
    let indexOf = this.steps.findIndex(actualStep => {
      return actualStep == this.step;
    });

    //Verificando paso
    switch (indexOf) {
      case 0:
        break;
      case 1:
        if((this.inscripcion.obtenerAlumno == null || this.inscripcion.obtenerAlumno == undefined) && nextStep) {
          this.shareSrv.presentToast({message: 'Debe seleccionar un alumno para continuar', cssClass: 'ERROR_TOAST'});
          return;
        }
        break;
      case 2:
        if((this.inscripcion.obtenerComision == null || this.inscripcion.obtenerComision == undefined) && nextStep) {
          this.shareSrv.presentToast({message: 'Debe seleccionar una comisi??n para continuar', cssClass: 'ERROR_TOAST'});
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

  cargarDatosAlumno(event: IPersonaSend){
    this.inscripcion.cambiarAlumno = event;
  }

  cargarDatosComision(event: IComisionSend){
    this.inscripcion.cambiarComision = event;
  }

  private returnToInscripciones(){
    location.reload();
  }

  async buscar(){
    let list = await this.cursoSrv.getCursosList();
    const modal = await this.modalCtrl.create({
      component: BuscadorOneSelectorModalComponent,
      cssClass: 'buscador-modal',
      backdropDismiss: false,
      componentProps: {
        'title': 'Buscar inscripciones',
        'list': list.cursos,
        'fieldToShowList': 'nombre',
        'labelList': 'Nombre del curso'
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    if(modalData.data){
      this.changePage(modalData.data);
    }
  }

  changePage(data){
    let navigationExtras: NavigationExtras = {
      state: {
          'curso': data.selected,
          'fechaInicio': data.fechaInicio,
          'fechaFin': data.fechaFin
      }
    };
    this.navCtrl.navigateRoot(['informe-inscripciones-gestion'], navigationExtras);
  }
}
