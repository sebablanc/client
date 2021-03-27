import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cursos-gestion',
  templateUrl: './cursos-gestion.page.html',
  styleUrls: ['./cursos-gestion.page.scss'],
})
export class CursosGestionPage implements OnInit {

  cursosFilteredList: Array<any> = [];
  cursosList: Array<any> = [];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
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
