import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-inscripciones-alumnos-datos',
  templateUrl: './inscripciones-alumnos-datos.component.html',
  styleUrls: ['./inscripciones-alumnos-datos.component.scss'],
})
export class InscripcionesAlumnosDatosComponent implements OnInit {

  @Input() alumnoSelected: IPersonaSend;
  @Output() emitPersona: EventEmitter<IPersonaSend> = new EventEmitter();
  alumnosFilteredList: Array<IPersonaSend> = [];
  alumnosList: Array<IPersonaSend> = [];

  constructor(private personaSrv: PersonaService, private shareSrv: ShareService) {}

  async ngOnInit() {
    await this.getPersonasList();
  }

  isSelected(alumno: IPersonaSend){
    return alumno && this.alumnoSelected && alumno.id == this.alumnoSelected.id;
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

  alumnoClicked(event: IPersonaSend){
    if(event && event != this.alumnoSelected){
      this.alumnoSelected = event;
    } else {
      this.alumnoSelected = null;
    }
    this.emitPersona.emit(this.alumnoSelected);
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.alumnosFilteredList = this.alumnosList;
    this.alumnosFilteredList = this.alumnosList.filter(alumno =>{
      return alumno.nombre.toLowerCase().includes(event.toLowerCase()) || alumno.apellido.toLowerCase().includes(event.toLowerCase()) || alumno.nroCuenta.includes(event) || alumno.dni.toString().includes(event);
    });
  }
}
