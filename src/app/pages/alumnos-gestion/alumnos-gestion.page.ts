import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-alumnos-gestion',
  templateUrl: './alumnos-gestion.page.html',
  styleUrls: ['./alumnos-gestion.page.scss'],
})
export class AlumnosGestionPage implements OnInit {
  
  alumnosFilteredList: Array<Persona> = [];
  alumnosList: Array<Persona> = [];
  
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
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: event
      }
    };
    this.navCtrl.navigateRoot(['alumno-data-gestion'], navigationExtras);
  }

  deletePersona(event: number){
    console.log('borraría la persona con este id: ', event);
    
  }

}
