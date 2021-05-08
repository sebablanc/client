import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { diasList } from 'src/app/models/dias/dias.types';

@Component({
  selector: 'app-comision-card',
  templateUrl: './comision-card.component.html',
  styleUrls: ['./comision-card.component.scss'],
})
export class ComisionCardComponent implements OnInit {
  @Input() comision: IComisionSend;
  @Input() isSelected: boolean = false;
  @Input() showSmallBotonera: boolean = true;
  @Input() showValue: boolean = false;
  @Output() modifyComision: EventEmitter<number> = new EventEmitter();
  @Output() deleteComision: EventEmitter<number> = new EventEmitter();

  horarioString: string = '';
  diasString: string = '';

  constructor() { }

  ngOnInit() {
    //Obtengo el string de días con los nombres completos
    console.log(this.comision);
    
    let days = this.comision.dias.split('/');
    diasList.forEach(dia => {
      days.forEach((day, index) => {
        if(dia.value == day){
          this.diasString += dia.name;
          if(index<days.length-1) this.diasString += '/';
        }
      });
    });

    this.horarioString = this.comision.horaDesde.toString().substr(0, 5) +' - '+ this.comision.horaHasta.toString().substr(0, 5);
  }

  goToModify(){
    this.modifyComision.emit(this.comision.id);
  }

  delete(){
    this.deleteComision.emit(this.comision.id);
  }

}
