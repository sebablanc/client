import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PremioModalComponent } from 'src/app/components/web/premio-modal/premio-modal.component';
import { Premio } from 'src/app/models/premio/premio';
import { PremioService } from 'src/app/services/premio/premio.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {

  showGanadorPC: boolean = false;
  premiosList: any = [];
  premioSelected: any = null;

  constructor(private modalCtrl: ModalController, private shareSrv: ShareService, private premioSrv: PremioService) { }

  ngOnInit() {
    this.getPremios();
  }

  async getPremios(){
    let response = await this.premioSrv.getPremios();
    this.premiosList = [];
    if(response && response.exito){
      this.premiosList = response.premios;
      console.log(this.premiosList);
      
    } else {
      this.shareSrv.presentToast({message: response.messages[0], cssClass: 'ERROR_TOAST'});
    }
  }

  async addPremio(){
    const modalData = await this.showModal(null);
    
    if(modalData.data){
      var premio = new Premio();
      Object.assign(premio, modalData.data);
      this.guardarPremio(premio, true);
    }
  }
  
  async showModal(premio: any){
    const modal = await this.modalCtrl.create({
      component: PremioModalComponent,
      backdropDismiss: false,
      cssClass: 'input-textarea-modal',
      componentProps: {
        'title': !premio ? 'Cargando premio' : 'Modificando premio',
        'premio': premio
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    return modalData;
  }

  async guardarPremio(data, create: boolean){
    if(data){
      // parsear premio a enviar
      var parsedPremio = this.premioSrv.parsePremioToPremioSend(data);
      
      var response = null;
      
      if(create){
        //Guardar novedad mediante el servicio
        response = await this.premioSrv.savePremio(parsedPremio);
      } else {
        //Modificar novedad mediante el servicio
        //response = await this.novedadSrv.updateNovedad(parsedNovedad);
      }
      
      
      if(response && response.exito){
        // recargar premios
        //this.obtenerNovedades();
        
        //mostrar mensaje de resultado correcto
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Premio guardado correctamente', cssClass: 'SUCCESS_TOAST'})
      } else {
        //mostrar mensaje de resultado incorrecto
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar guardar la novedad', cssClass: 'ERROR_TOAST'})
      }
    }
  }

  selectPremio(premio: any){
    if(!this.premioSelected || (this.premioSelected && this.premioSelected.id != premio.id)){
      this.premioSelected = premio
    } else {
      this.premioSelected = null;
    }
  }
}
