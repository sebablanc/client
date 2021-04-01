import { Injectable } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';
import { CursoResponse } from 'src/app/models/curso/cursoResponse';
import { HttpHelperService } from '../http/http-helper.service';
import { ICursoSend } from './cursoService.interface';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private urlCreateCurso = 'curso/create';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parseCursoToCursoSend(curso: Curso): ICursoSend{
    if(!curso) return;

    let cursoToSend: ICursoSend = {
      id: curso.obtenerId,
      nombre: curso.obtenerNombre,
      categoria: curso.obtenerCategoria.value,
      descripcion: curso.obtenerDescripicion,
      imagen: curso.obtenerImagen,
      programa: curso.obtenerPrograma,
      valor: curso.obtenerValor,
      createdAt: curso.obtenerFechaCreacion ? curso.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return cursoToSend;
  }

  async guardarCurso(data: ICursoSend): Promise<CursoResponse>{
    return this.httpHelperSrv.post({url: this.urlCreateCurso, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
