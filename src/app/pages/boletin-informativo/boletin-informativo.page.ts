import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputTextareaModalComponent } from 'src/app/components/web/input-textarea-modal/input-textarea-modal.component';
import { Novedad } from 'src/app/models/novedad/novedad';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { NovedadService } from 'src/app/services/novedad/novedad.service';
import { INovedadSend } from 'src/app/services/novedad/novedadService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {

  novedadesList: any;
  user: User;
  userTypes = UserTypes;

  constructor(private modalCtrl: ModalController, private novedadSrv: NovedadService, private shareSrv: ShareService, private userSingleton: UserSingleton) { }

  ngOnInit() {
    this.user = this.userSingleton.instance();
    this.obtenerNovedades();
  }

  async obtenerNovedades(){
    var response = await this.novedadSrv.getNovedadesList();
    if(response && response.exito){
      this.novedadesList = response.novedades;
    } else {
      this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar obtener las novedades', cssClass: 'WARNING_TOAST'})
    }
  }

  async createNewNovedad(){
    const modalData = await this.showModal(null);
    
    if(modalData.data){
      var novedad: Novedad = new Novedad();
      Object.assign(novedad, modalData.data);
      this.guardarNovedad(novedad, true);
    }
  }

  async showModal(novedad: Novedad){
    const modal = await this.modalCtrl.create({
      component: InputTextareaModalComponent,
      backdropDismiss: false,
      cssClass: 'input-textarea-modal',
      componentProps: {
        'title': !novedad ? 'Cargando novedad' : 'Modificando novedad',
        'inputLabel': 'Título de la novedad',
        'textareaLabel': 'Mensaje de la novedad',
        'element': novedad
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    return modalData;
  }
  
  async guardarNovedad(data, create: boolean){
    if(data){
      var parsedNovedad = this.novedadSrv.parseNovedadToNovedadSend(data);
      
      var response = null;

      if(create){
        response = await this.novedadSrv.saveNovedad(parsedNovedad);
      } else {
        response = await this.novedadSrv.updateNovedad(parsedNovedad);
      }
      
      
      if(response && response.exito){
        this.obtenerNovedades();
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Novedad guardada correctamente', cssClass: 'SUCCESS_TOAST'})
      } else {
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar guardar la novedad', cssClass: 'ERROR_TOAST'})
      }
    }
  }
  
  async editNovedad(nov: INovedadSend){
    var novedad: Novedad = new Novedad();
    
    novedad.cambiarMensaje = nov.messageNovedad;
    novedad.cambiarTitle = nov.title;
    novedad.cambiarFechaCreacion = nov.createdAt;
    novedad.cambiarFechaModificacion = nov.updatedAt;
    novedad.cambiarId = nov.id;

    Object.assign(novedad, nov);
    const modalData = await this.showModal(novedad);
    
    if(modalData.data){
      Object.assign(novedad, modalData.data);
      this.guardarNovedad(novedad, false);
    }
    
  }

  async deleteNovedad(novedad: INovedadSend){
    let response = await this.novedadSrv.deleteNovedad(novedad.id);
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    this.obtenerNovedades();
  }
}
