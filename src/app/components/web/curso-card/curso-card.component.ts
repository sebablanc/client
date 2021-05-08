import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { smallBotonerConfig } from 'src/app/ui/small-botonera/small-botonera.component';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss'],
})
export class CursoCardComponent implements OnInit {
  @Input() curso: ICursoSend;
  @Output() modifyCurso: EventEmitter<number> = new EventEmitter();
  @Output() deleteCurso: EventEmitter<number> = new EventEmitter();
  @Output() materialDidactico: EventEmitter<number> = new EventEmitter();

  smallBotoneraConfig: smallBotonerConfig;
  constructor() { }

  ngOnInit() {
    this.smallBotoneraConfig = {
      needLeftButton: true,
      needMiddleButton: true,
      needRightButton: true
    }
  }

  goToModify(){
    this.modifyCurso.emit(this.curso.id);
  }


  goToMaterialDidactico(){
    this.materialDidactico.emit(this.curso.id);
  }

  delete(){
    this.deleteCurso.emit(this.curso.id);
  }
}
