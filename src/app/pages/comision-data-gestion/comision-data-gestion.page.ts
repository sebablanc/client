import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comision } from 'src/app/models/comision/comision';
import { ComisionResponse } from 'src/app/models/comision/comisionResponse';
import { ComisionService } from 'src/app/services/comision/comision.service';
import { IComisionSend } from 'src/app/services/comision/comisionService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-comision-data-gestion',
  templateUrl: './comision-data-gestion.page.html',
  styleUrls: ['./comision-data-gestion.page.scss'],
})
export class ComisionDataGestionPage implements OnInit {
  
  comisionId: number;
  title: string = 'Agregando comisión';

  constructor(private route: ActivatedRoute, private shareSrv: ShareService, private comisionSrv: ComisionService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.comisionId = params['id'] != 'null' ? params['id'] : null;
      if (this.comisionId) {
        this.title = 'Modificando comisión';
      }
    });
  }

  async guardarComision(event: Comision) {
    if (event) {
      let comisionToSend: IComisionSend = this.comisionSrv.parseComisionToComisionSend(event);
      if(this.comisionId){
        this.modifyComision(comisionToSend);
      } else{
        this.saveComision(comisionToSend);
      }
    } else {
      this.returnToComision();
    }
  }

  async saveComision(comision: IComisionSend){
    let response =  await this.comisionSrv.guardarComision(comision);
    
    this.finishTransactions(response);
  }

  async modifyComision(comision: IComisionSend){
    let response =  await this.comisionSrv.updateComision(comision);
    
    this.finishTransactions(response);
  }

  async finishTransactions(response: ComisionResponse){
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    
    this.returnToComision();
  }

  private returnToComision(){
    this.shareSrv.goTo('comision-gestion');
  }

}
