import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PremioModalComponent } from 'src/app/components/web/premio-modal/premio-modal.component';
import { Premio } from 'src/app/models/premio/premio';
import { PremioResponse } from 'src/app/models/premio/premioReponse';
import { PremioService } from 'src/app/services/premio/premio.service';
import { IPremioSend } from 'src/app/services/premio/premioService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';
import { SweetAlertService } from 'src/app/services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {

  showGanadorPC: boolean = false;
  premiosCuotasList: Array<IPremioSend> = [];
  premioComputadora: IPremioSend = null;
  premioSelected: any = null;

  constructor(private modalCtrl: ModalController, private shareSrv: ShareService, private premioSrv: PremioService, private sweetAlertSrv: SweetAlertService) { }

  ngOnInit() {
    this.getPremios();
  }

  async getPremios(){
    let response = await this.premioSrv.getPremios();
    this.premiosCuotasList = [];
    if(response && response.exito){
      this.premiosCuotasList = response.premios.filter(premio =>{
        return premio.tipo == 'CUOTA'
      });
      this.premioComputadora = response.premios.filter(premio =>{
        return premio.tipo == 'COMPUTADORA'
      })[0];
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

  async editPremio(){
    if(!this.premioSelected){
      this.shareSrv.presentToast({ message: 'Debe seleccionar alguno de los premios para realizar esta acción', cssClass: 'WARNING_TOAST'});
      return;
    }

    var premio = new Premio();
    Object.assign(premio, this.premioSelected);
    premio.cambiarTipo = this.premioSelected.tipo;
    
    const modalData = await this.showModal(premio);
    
    if(modalData.data){
      Object.assign(premio, modalData.data);
      this.guardarPremio(premio, false);
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
        //Guardar premio mediante el servicio
        response = await this.premioSrv.savePremio(parsedPremio);
      } else {
        //Modificar premio mediante el servicio
        response = await this.premioSrv.updatePremio(parsedPremio);
      }
      
      this.verifyReponse(response, 'Premio guardado correctamente', 'Error al intentar guardar el premio');
      
    }
  }

  selectPremio(premio: any){
    if(!this.premioSelected || (this.premioSelected && this.premioSelected.id != premio.id)){
      this.premioSelected = premio
    } else {
      this.premioSelected = null;
    }
  }

  async confirmDelete(){
    if(!this.premioSelected){
      this.shareSrv.presentToast({ message: 'Debe seleccionar alguno de los premios para realizar esta acción', cssClass: 'WARNING_TOAST'});
      return;
    }

    let eliminar = await this.sweetAlertSrv.decisionAlert('¿Desea eliminar el premio?', 'Este proceso no tiene vuelta atrás', 'Sí, quiero borrar', 'No, mantener');
    if(eliminar){
      this.deletePremio();
    }
  }

  private async deletePremio(){
    let response = await this.premioSrv.deletePremio(this.premioSelected.id);
    this.verifyReponse(response, 'Premio eliminado correctamente', 'Error al intentar eliminar el premio');
  }

  private verifyReponse(response: PremioResponse, messageSuccesDefault: string, messageErrorDefault: string){
    if(response && response.exito){
      // recargar premios
      this.getPremios();
      
      //mostrar mensaje de resultado correcto
      this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : messageSuccesDefault, cssClass: 'SUCCESS_TOAST'})
    } else {
      //mostrar mensaje de resultado incorrecto
      this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : messageErrorDefault, cssClass: 'ERROR_TOAST'})
    }
  }
}
