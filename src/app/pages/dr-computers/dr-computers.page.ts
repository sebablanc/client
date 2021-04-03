import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso/curso.service';
import { CursoType } from 'src/app/models/curso/curso-types.enum';
import { ShareService } from 'src/app/services/share-service/share.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';

const CATEGORIA_FILTER = {
  categoria: CursoType.ADULTOS
}

@Component({
  selector: 'app-dr-computers',
  templateUrl: './dr-computers.page.html',
  styleUrls: ['./dr-computers.page.scss'],
})
export class DrComputersPage implements OnInit {

  cursosList: Array<ICursoSend>;
  
  constructor(private cursoSrv: CursoService, private shareSrv: ShareService) { }

  async ngOnInit() {
    let cursoResponse = await this.cursoSrv.getCursoByFilters(CATEGORIA_FILTER);
    if(cursoResponse && cursoResponse.exito && cursoResponse.cursos && cursoResponse.cursos.length>0){
      this.cursosList = cursoResponse.cursos;
    } else {
      this.shareSrv.presentToast({message: cursoResponse.messages[0], cssClass: 'ERROR_TOAST'});
    }
  }

}
