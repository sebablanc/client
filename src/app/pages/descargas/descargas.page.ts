import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.page.html',
  styleUrls: ['./descargas.page.scss'],
})
export class DescargasPage implements OnInit {

  cursosList: Array<ICursoSend>;

  constructor(private cursoSrv: CursoService, private shareSrv: ShareService, private navCtrl: NavController) { }

  async ngOnInit() {
    let cursoResponse = await this.cursoSrv.getCursosList();
    if(cursoResponse && cursoResponse.exito && cursoResponse.cursos && cursoResponse.cursos.length>0){
      this.cursosList = cursoResponse.cursos;
    } else {
      this.shareSrv.presentToast({message: cursoResponse.messages[0], cssClass: 'ERROR_TOAST'});
    }
  }

  goToDownloads(curso: ICursoSend){
    let navigationExtras: NavigationExtras = {
      state: {
          'curso': curso
      }
    };
    this.navCtrl.navigateRoot(['descargar-material-didactico'], navigationExtras);
  }

}
