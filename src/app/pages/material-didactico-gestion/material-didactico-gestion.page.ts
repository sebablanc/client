import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ArchivoModalComponent } from 'src/app/components/web/archivo-modal/archivo-modal.component';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';

@Component({
  selector: 'app-material-didactico-gestion',
  templateUrl: './material-didactico-gestion.page.html',
  styleUrls: ['./material-didactico-gestion.page.scss'],
})
export class MaterialDidacticoGestionPage implements OnInit {

  cursoId: number;
  user: User;
  userTypes = UserTypes;

  constructor(private route: ActivatedRoute, private userSingleton: UserSingleton, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.user = this.userSingleton.instance();
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['id'] != 'null' ? params['id'] : null;
    });
  }

  async createNewArchivo(){
    const modalData = await this.showModal(null);
    
    if(modalData.data){
      /*var novedad: Novedad = new Novedad();
      Object.assign(novedad, modalData.data);
      this.guardarNovedad(novedad, true);*/
    }
  }


  async showModal(archivo: any){
    const modal = await this.modalCtrl.create({
      component: ArchivoModalComponent,
      backdropDismiss: false,
      cssClass: 'buscador-modal',
      componentProps: {
        'title': !archivo ? 'Cargando archivo' : 'Modificando archivo',
        'inputLabel': 'Nombre del archivo',
        'element': archivo
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    return modalData;
  }
}
