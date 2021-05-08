import { Component, Input, OnInit } from '@angular/core';
import { meses, MesType } from 'src/app/models/meses/meses';
import { Premio } from 'src/app/models/premio/premio';
import { IPremioSend } from 'src/app/services/premio/premioService.interface';

@Component({
  selector: 'app-premio-card',
  templateUrl: './premio-card.component.html',
  styleUrls: ['./premio-card.component.scss'],
})
export class PremioCardComponent implements OnInit {

  @Input() premio: IPremioSend;
  @Input() selected: boolean;
  mes: MesType;
  
  constructor() { }

  ngOnInit() {
    if(this.premio && this.premio.mes){
      this.mes = meses.filter(mesObject => {return mesObject.value == this.premio.mes})[0];
    }
  }

}
