import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-cursos-gestion',
  templateUrl: './cursos-gestion.page.html',
  styleUrls: ['./cursos-gestion.page.scss'],
})
export class CursosGestionPage implements OnInit {

  cursosFilteredList: Array<any> = [];
  cursosList: Array<any> = [];

  constructor(private navCtrl: NavController, private cursoSrv: CursoService, private shareSrv: ShareService) { }

  ngOnInit() {
    this.getCursosList();  
  }

  async getCursosList(){
    let response = await this.cursoSrv.getCursosList();
    if(response.exito){
      this.cursosFilteredList = this.cursosList = response.cursos;
    } else {
      this.cursosFilteredList = this.cursosList = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  goToModify(event: number){
    this.changePage(event);
  }

  async deleteCurso(event: number){
    let response = await this.cursoSrv.deleteCurso(event);
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    this.getCursosList();
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.cursosFilteredList = this.cursosList;
    this.cursosFilteredList = this.cursosList.filter(curso =>{
      return curso.nombre.includes(event) || curso.id.toString().includes(event);
    });
  }

  goToNuevoCurso(event: boolean){
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
    this.navCtrl.navigateRoot(['curso-data-gestion'], navigationExtras);
  }
}
