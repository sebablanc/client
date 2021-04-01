import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ComisionService } from 'src/app/services/comision/comision.service';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-comisiones-gestion',
  templateUrl: './comisiones-gestion.page.html',
  styleUrls: ['./comisiones-gestion.page.scss'],
})
export class ComisionesGestionPage implements OnInit {

  comisionesFilteredList: Array<IComisionSend> = [];
  comisionesList: Array<IComisionSend> = [];

  constructor(private navCtrl: NavController, private shareSrv: ShareService, private comisionSrv: ComisionService) { }

  ngOnInit() {
    this.getComisionesList();  
  }

  async getComisionesList(){
    let response = await this.comisionSrv.getComisionesList();
    if(response && response.exito){
      this.comisionesFilteredList = this.comisionesList = response.comisiones;
    } else {
      this.comisionesFilteredList = this.comisionesList = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.comisionesFilteredList = this.comisionesList;
    this.comisionesFilteredList = this.comisionesList.filter(comision =>{
      return comision.id.toString().includes(event);
    });
  }

  goToNuevaComision(event: boolean){
    if(event){
      this.changePage(null);
    }
  }

  goToModify(event: number){
    this.changePage(event);
  }
  
  async deleteComision(event: number){
    let response = await this.comisionSrv.deleteComision(event);
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    this.getComisionesList();
  }

  changePage(id: number){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: id
      }
    };
    this.navCtrl.navigateRoot(['comision-data-gestion'], navigationExtras);
  }
}
