import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaResponse } from 'src/app/models/persona/personaResponse';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-alumno-data-gestion',
  templateUrl: './alumno-data-gestion.page.html',
  styleUrls: ['./alumno-data-gestion.page.scss'],
})
export class AlumnoDataGestionPage implements OnInit {

  personaId: number;
  title: string = 'Agregando alumno';
  constructor(private route: ActivatedRoute, private shareSrv: ShareService, private personaSrv: PersonaService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.personaId = params['id'] != 'null' ? params['id'] : null;
      if(this.personaId){
        this.title = 'Modificando alumno';
      }
    });
  }

  async guardarPersona(event: Persona) {
    if (event) {
      let personaToSend: IPersonaSend = this.personaSrv.parsePersonaToPersonaSend(event);
      if(this.personaId){
        this.modifyPersona(personaToSend);
      } else{
        this.savePersona(personaToSend);
      }
    } else {
      this.shareSrv.goTo('alumnos-gestion');
    }
  }

  async savePersona(personaToSend: IPersonaSend){
    let response =  await this.personaSrv.guardarPersona(personaToSend);
    
    this.finishTransactions(response);
  }


  async modifyPersona(persona: IPersonaSend){
    let response =  await this.personaSrv.updatePersona(persona);
    
    this.finishTransactions(response);
  }

  async finishTransactions(response: PersonaResponse){
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    
    this.shareSrv.goTo('alumnos-gestion');
  }

}
