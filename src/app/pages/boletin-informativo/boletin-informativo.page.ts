import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputTextareaModalComponent } from 'src/app/components/web/input-textarea-modal/input-textarea-modal.component';
import { Novedad } from 'src/app/models/novedad/novedad';
import { NovedadService } from 'src/app/services/novedad/novedad.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-boletin-informativo',
  templateUrl: './boletin-informativo.page.html',
  styleUrls: ['./boletin-informativo.page.scss'],
})
export class BoletinInformativoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private novedadSrv: NovedadService, private shareSrv: ShareService) { }

  ngOnInit() {
  }


  async createNewNovedad(){
    const modal = await this.modalCtrl.create({
      component: InputTextareaModalComponent,
      backdropDismiss: false,
      cssClass: 'input-textarea-modal',
      componentProps: {
        'title': 'Cargando novedad',
        'inputLabel': 'Título de la novedad',
        'textareaLabel': 'Mensaje de la novedad'
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    
    if(modalData.data){
      //TODO: guardar la novedad
      var novedad: Novedad = new Novedad();
      Object.assign(novedad, modalData.data);
      this.guardarNovedad(novedad);
    }
  }

  async guardarNovedad(data){
    if(data){
      var parsedNovedad = this.novedadSrv.parseNovedadToNovedadSend(data);
      var response = await this.novedadSrv.guardarNovedad(parsedNovedad);
      if(response && response.exito){
        // TODO: guardado correctamente
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Novedad guardada correctamente', cssClass: 'SUCCESS_TOAST'})
      } else {
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar guardar la novedad', cssClass: 'ERROR_TOAST'})
      }
    }
  }
}
