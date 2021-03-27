import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-alumnos-gestion',
  templateUrl: './alumnos-gestion.page.html',
  styleUrls: ['./alumnos-gestion.page.scss'],
})
export class AlumnosGestionPage implements OnInit {
  
  alumnosFilteredList: Array<IPersonaSend> = [];
  alumnosList: Array<IPersonaSend> = [];
  
  constructor(private personaSrv: PersonaService, private shareSrv: ShareService, private navCtrl: NavController) { }

  async ngOnInit() {
    let response = await this.personaSrv.getPersonasList();
    if(response.exito){
      this.alumnosFilteredList = this.alumnosList = response.personas;
    } else {
      this.alumnosFilteredList = this.alumnosList = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  goToModify(event: number){
    this.changePage(event);
  }

  deletePersona(event: number){
    console.log('borraría la persona con este id: ', event);
    
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.alumnosFilteredList = this.alumnosList;
    this.alumnosFilteredList = this.alumnosList.filter(alumno =>{
      return alumno.nombre.includes(event) || alumno.apellido.includes(event) || alumno.nroCuenta.includes(event) || alumno.dni.toString().includes(event);
    });
  }

  goToNuevoAlumno(event: boolean){
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
    this.navCtrl.navigateRoot(['alumno-data-gestion'], navigationExtras);
  }

}
