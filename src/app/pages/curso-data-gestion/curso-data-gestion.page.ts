import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from 'src/app/models/curso/curso';
import { CursoResponse } from 'src/app/models/curso/cursoResponse';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-curso-data-gestion',
  templateUrl: './curso-data-gestion.page.html',
  styleUrls: ['./curso-data-gestion.page.scss'],
})
export class CursoDataGestionPage implements OnInit {

  cursoId: number;
  title: string = 'Agregando curso';

  constructor(private route: ActivatedRoute, private shareSrv: ShareService, private cursoSrv: CursoService, private pdfService: PdfService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['id'] != 'null' ? params['id'] : null;
      if (this.cursoId) {
        this.title = 'Modificando curso';
      }
    });
  }

  async guardarCurso(event: {curso: Curso, pdf: any}) {
    if (event) {
      let cursoToSend: ICursoSend = this.cursoSrv.parseCursoToCursoSend(event.curso);
      let response = null;
      if(this.cursoId){
        response = await this.modifyCurso(cursoToSend);
        response.cursos = [event.curso];
      } else{
        response = await this.saveCurso(cursoToSend);
      }
      this.finishTransactions(response, event.pdf);
    } else {
      this.returnToCursos();
    }
  }

  async saveCurso(cursoToSend: ICursoSend){
    let response =  await this.cursoSrv.saveCurso(cursoToSend);
    return response;
    
  }

  async modifyCurso(curso: ICursoSend){
    let response =  await this.cursoSrv.updateCurso(curso);
    
    return response;
  }

  async finishTransactions(response: CursoResponse, pdf: any){
    let colorToast = response && response.exito ? 'SUCCESS_TOAST' : 'ERROR_TOAST';

    console.log(response);
    
    if(response && response.exito){
      //TODO: enviar PDF
      console.log(pdf);
      
      await this.pdfService.sendPDFProgramaCurso(pdf, response.cursos[0].id);
    }
    
    this.shareSrv.presentToast({message: response.messages[0], cssClass: colorToast});
    
    this.returnToCursos();
  }
  
  private returnToCursos(){
    this.shareSrv.goTo('cursos-gestion');
  }
}