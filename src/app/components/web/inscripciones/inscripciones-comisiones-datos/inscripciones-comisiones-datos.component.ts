import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ComisionService } from 'src/app/services/comision/comision.service';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-inscripciones-comisiones-datos',
  templateUrl: './inscripciones-comisiones-datos.component.html',
  styleUrls: ['./inscripciones-comisiones-datos.component.scss'],
})
export class InscripcionesComisionesDatosComponent implements OnInit {
  
  @Output() emitComision: EventEmitter<IComisionSend> = new EventEmitter();
  comisionesFilteredList: Array<IComisionSend> = [];
  comisionesList: Array<IComisionSend> = [];
  comisionSelected: IComisionSend = null;

  constructor(private comisionSrv: ComisionService, private shareSrv: ShareService) { }

  async ngOnInit() {
    await this.getComisionesList();  
  }

  async getComisionesList(){
    let response = await this.comisionSrv.getComisionesList();
    if(response && response.exito){
      this.comisionesFilteredList = this.comisionesList = response.comisiones;
    } else {
      this.comisionesFilteredList = this.comisionesList = [];
      this.shareSrv.presentToast({ message: response.messages[0], cssClass: 'TOAST_ERROR' });
    }
  }

  comisionClicked(event: IComisionSend){
    if(event && event != this.comisionSelected){
      this.comisionSelected = event;
    } else {
      this.comisionSelected = null;
    }
    this.emitComision.emit(this.comisionSelected);
  }

  filtrarLista(event: string){
    if(event.length <= 0) this.comisionesFilteredList = this.comisionesList;
    this.comisionesFilteredList = this.comisionesList.filter(comision =>{
      return comision.id.toString().includes(event);
    });
  }

}
