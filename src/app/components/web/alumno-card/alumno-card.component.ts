import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';
import { smallBotonerConfig } from 'src/app/ui/small-botonera/small-botonera.component';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.scss'],
})
export class AlumnoCardComponent implements OnInit {

  @Input() persona: IPersonaSend;
  @Input() isSelected: boolean = false;
  @Input() showSmallBotonera: boolean = true;
  @Output() modifyPersona: EventEmitter<number> = new EventEmitter();
  @Output() deletePersona: EventEmitter<number> = new EventEmitter();

  smallBotoneraConfig: smallBotonerConfig;
  constructor() { }

  ngOnInit() {
    this.smallBotoneraConfig = {
      needLeftButton: true,
      needMiddleButton: false,
      needRightButton: true
    }
  }

  goToModify(){
    this.modifyPersona.emit(this.persona.id);
  }

  delete(){
    this.deletePersona.emit(this.persona.id);
  }

}
