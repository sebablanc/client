import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cursosAdultos: Array<ICursoSend>;
  cursosKids: Array<ICursoSend>;
  
  constructor(private cursosSrv: CursoService, private shareSrv: ShareService, private navCtrl: NavController) { }

  ngOnInit() {
    this.getCursosList();
  }

  async getCursosList(){
    let response = await this.cursosSrv.getCursosList();
    this.cursosAdultos = [];
    this.cursosKids = [];
    if(response.exito){
      response.cursos.forEach(curso =>{
        if(curso.categoria == 'ADULTOS'){
          this.cursosAdultos.push(curso);
        } else {
          this.cursosKids.push(curso);
        } 
      });
    } else {
      this.cursosAdultos = this.cursosKids = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  goToDetail(curso: ICursoSend){
    let navigationExtras: NavigationExtras = {
      state: {
          'curso': curso
      }
    };
    this.navCtrl.navigateRoot(['curso-detail'], navigationExtras);
  }
}
