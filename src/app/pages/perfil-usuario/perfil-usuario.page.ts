import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  constructor(private shareSrv: ShareService, private personaSrv: PersonaService, private storageSrv: StorageService) { }

  ngOnInit() {
  }

  async guardarPersona(event: Persona) {
    if (event) {
      let personaToSend: IPersonaSend = this.personaSrv.parsePersonaToPersonaSend(event);

      if (event.getId) {
        //TODO: modificar
      } else {
        //TODO: guardar
        await this.savePersona(personaToSend)
      }
    }
    this.shareSrv.goTo('home');
  }

  async savePersona(personaToSend: IPersonaSend){
    let response =  await this.personaSrv.guardarPersona(personaToSend);
    debugger;
    if(response && response.exito && response.personas && response.personas.length>0){
      this.storageSrv.set('persona', response.personas[0]);
    }
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast})
  }
}