import { Component, OnInit } from '@angular/core';
import { CursoType } from 'src/app/models/curso/curso-types.enum';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

const CATEGORIA_FILTER = {
  categoria: CursoType.KIDS
}

@Component({
  selector: 'app-dr-kids',
  templateUrl: './dr-kids.page.html',
  styleUrls: ['./dr-kids.page.scss'],
})
export class DrKidsPage implements OnInit {
  
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
