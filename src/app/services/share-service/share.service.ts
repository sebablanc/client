import { Injectable } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { IToast } from './share-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private loading: HTMLIonLoadingElement;

  constructor(private toastCtrl: ToastController, private loadingCtrl: LoadingController, private navCtrl: NavController) { }

  getErrorMessage(field: any) {
    if (field.hasError('required')) {
      return 'Campo requerido';
    }

    if(field.hasError('email')){
      return 'Debe ingresar un email válido';
    }
   
    if(field.hasError('min')){
      return 'Debe ingresar como mínimo ' + field.errors.min.min + ' dígitos';
    }
   
    if(field.hasError('minlength')){
      return 'Debe ingresar como mínimo ' + field.errors.minlength.requiredLength + ' caracteres';
    }
  }


  /**
   * T O A S T
   */

  async presentToast(config: IToast){
    const toast = await this.toastCtrl.create({
      message: config.message,
      position: 'top',
      cssClass: config.cssClass,
      duration: 1000
    });

    return toast.present();
  }

 /**
   * L O A D I N G
   */

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await this.loading.present();
    const { role, data } = await this.loading.onDidDismiss();
  }

  dismissLoading() {
    if(this.loading){
      this.loading.dismiss();
    }
  }

  /**
   * N A V I G A T E
   */

   goTo(link: string){
    this.navCtrl.navigateRoot(`/${link}`);
  }
}
