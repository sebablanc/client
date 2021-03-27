import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona';
import { PersonaResponse } from 'src/app/models/persona/personaResponse';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UserService } from 'src/app/services/user/user/user.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  personaId: number;
  userTipo: string;
  
  constructor(
    private shareSrv: ShareService,
    private personaSrv: PersonaService,
    private storageSrv: StorageService,
    private userSrv: UserService,
    private userSingleton: UserSingleton) {
     
    }

  async ngOnInit() {
    let user = this.userSingleton.instance();
    this.userTipo = user.tipo;
    this.personaId = user.persona['id'];
  }

  async guardarPersona(event: Persona) {
    if (event) {
      let personaToSend: IPersonaSend = this.personaSrv.parsePersonaToPersonaSend(event);
      if (event.getId) {
        await this.updatePersona(personaToSend, event);
      } else {
        await this.savePersona(personaToSend, event);
      }
    } else {
      this.shareSrv.goTo('home');
    }
    
  }

  async savePersona(personaToSend: IPersonaSend, persona: Persona){
    let response =  await this.personaSrv.guardarPersona(personaToSend);
    
    this.finishTransactions(response, persona);
  }

  async updatePersona(personaToSend: IPersonaSend, persona: Persona){
    let response =  await this.personaSrv.updatePersona(personaToSend);
    
    this.finishTransactions(response, persona);
  }

  async finishTransactions(response: PersonaResponse, persona: Persona){
    if(response && response.exito){
      let user = await this.userSingleton.instance();
      user.persona = persona;
      await this.userSrv.updateUser(user)
      this.storageSrv.set('persona', persona);
      this.shareSrv.goTo('home');
    }
    
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
  }
}