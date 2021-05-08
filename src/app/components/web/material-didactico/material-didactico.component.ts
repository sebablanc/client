import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';
import { CursoService } from 'src/app/services/curso/curso.service';

@Component({
  selector: 'app-material-didactico',
  templateUrl: './material-didactico.component.html',
  styleUrls: ['./material-didactico.component.scss'],
})
export class MaterialDidacticoComponent implements OnInit {
  @Input() cursoId: number;
  curso: Curso = new Curso();

  constructor(private cursoSrv: CursoService) {
  }

  async ngOnInit() {
    if(this.cursoId){
      let response = await this.cursoSrv.getCursoById(this.cursoId);
      if(response && response.exito){
        Object.assign(this.curso, response.cursos[0]);
        console.log(this.curso);
        
      }
    }
  }

}
