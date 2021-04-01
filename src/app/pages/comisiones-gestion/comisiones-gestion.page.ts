import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-comisiones-gestion',
  templateUrl: './comisiones-gestion.page.html',
  styleUrls: ['./comisiones-gestion.page.scss'],
})
export class ComisionesGestionPage implements OnInit {

  comisionesFilteredList: Array<any> = [];
  comisionesList: Array<any> = [];

  constructor(private navCtrl: NavController, private shareSrv: ShareService, private comisionSrv: ComisionService) { }

  ngOnInit() {
    this.getComisionesList();  
  }

  async getComisionesList(){
    //let response = await this.comisionSrv.getCursosList();
    let response = null;
    if(response && response.exito){
      this.comisionesFilteredList = this.comisionesList = response.cursos;
    } else {
      this.comisionesFilteredList = this.comisionesList = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.comisionesFilteredList = this.comisionesList;
    this.comisionesFilteredList = this.comisionesList.filter(curso =>{
      return curso.nombre.includes(event) || curso.id.toString().includes(event);
    });
  }

  goToNuevaComision(event: boolean){
    if(event){
      this.changePage(null);
    }
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
