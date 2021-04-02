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

  ngOnInit() {
    this.getPersonasList();  
  }

  async getPersonasList(){
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

  async deletePersona(event: number){
    let response = await this.personaSrv.deletePersona(event);
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    this.getPersonasList();
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.alumnosFilteredList = this.alumnosList;
    this.alumnosFilteredList = this.alumnosList.filter(alumno =>{
      return alumno.nombre.toLowerCase().includes(event.toLowerCase()) || alumno.apellido.toLowerCase().includes(event.toLowerCase()) || alumno.nroCuenta.includes(event) || alumno.dni.toString().includes(event);
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
