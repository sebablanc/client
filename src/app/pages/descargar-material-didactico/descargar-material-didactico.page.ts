import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso/curso.service';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-descargar-material-didactico',
  templateUrl: './descargar-material-didactico.page.html',
  styleUrls: ['./descargar-material-didactico.page.scss'],
})
export class DescargarMaterialDidacticoPage implements OnInit {

  curso: ICursoSend;
  constructor(private cursoSrv: CursoService, private shareSrv: ShareService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.curso = this.router.getCurrentNavigation().extras.state.curso;
      }
    });
    let cursoResponse = await this.cursoSrv.getCursoById(this.curso.id);
    if(cursoResponse && cursoResponse.exito && cursoResponse.cursos && cursoResponse.cursos.length>0){
      this.curso = cursoResponse.cursos[0];
    } else {
      this.shareSrv.presentToast({message: cursoResponse.messages[0], cssClass: 'WARNING_TOAST'});
    }
  }

}
