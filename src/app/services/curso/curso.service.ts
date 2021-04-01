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
  private urlFindAllCursos = 'curso/all';
  private urlDeleteCurso = 'curso/delete';
  private urlFindCurso = 'curso/find';
  private urlUpdateCurso = 'curso/update';
  
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

  async updateCurso(data: ICursoSend): Promise<CursoResponse>{
    return this.httpHelperSrv.put({url: this.urlUpdateCurso, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getCursosList(): Promise<CursoResponse>{
    return this.httpHelperSrv.get({url: this.urlFindAllCursos, body: null}).then(result => {
      return result;
    })
  }

  async deleteCurso(id: number): Promise<CursoResponse>{
    let data = {id: id}
    return this.httpHelperSrv.post({url: this.urlDeleteCurso, body: data}).then(response => { 
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  async getCursoById(id: number): Promise<CursoResponse>{
    let data = {id: id}
    return this.httpHelperSrv.post({url: this.urlFindCurso, body: data}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }
}
