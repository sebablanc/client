import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso/curso';
import { CursoResponse } from 'src/app/models/curso/cursoResponse';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-curso-data-gestion',
  templateUrl: './curso-data-gestion.page.html',
  styleUrls: ['./curso-data-gestion.page.scss'],
})
export class CursoDataGestionPage implements OnInit {

  cursoId: number;
  title: string = 'Agregando curso';

  constructor(private route: ActivatedRoute, private shareSrv: ShareService, private cursoSrv: CursoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['id'] != 'null' ? params['id'] : null;
      if (this.cursoId) {
        this.title = 'Modificando curso';
      }
    });
  }

  async guardarCurso(event: Curso) {
    if (event) {
      let cursoToSend: ICursoSend = this.cursoSrv.parseCursoToCursoSend(event);
      if(this.cursoId){
        // this.modifyCurso(cursoToSend);
      } else{
        this.saveCurso(cursoToSend);
      }
    } else {
      this.shareSrv.goTo('curso-gestion');
    }
  }

  async saveCurso(cursoToSend: ICursoSend){
    let response =  await this.cursoSrv.guardarCurso(cursoToSend);
    
    this.finishTransactions(response);
  }

  async finishTransactions(response: CursoResponse){
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    
    this.shareSrv.goTo('cursos-gestion');
  }
}