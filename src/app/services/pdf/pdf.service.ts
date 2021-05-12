import { Injectable } from '@angular/core';
import { IInscripcionSend } from '../inscripcion/inscripcionService.interface';
import { IPersonaSend } from '../persona/personaService.interface';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { HttpHelperService } from '../http/http-helper.service';
import { MaterialDidactico } from 'src/app/models/material-didactico/materialDidactico';
import { IMaterialDidacticoSend } from './materialDidactico.interface';
import { MaterialDidacticoResponse } from 'src/app/models/material-didactico/materialDidacticoResponse';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private urlSendProgramaCurso = 'pdf/curso_programa';
  private urlSendMaterialDidactico = 'pdf/curso_file';
  private urlDownloadMaterialDidactico = 'pdf/download';
  private urlGetMaterialDidacticoByCurso = 'pdf/findByCurso';

  constructor(private httpHelperSrv: HttpHelperService) { }

  parsePDFMaterialDidacticoToMaterialDidacticoSend(materialDidactico: MaterialDidactico): IMaterialDidacticoSend{
    if(!materialDidactico) return;

    let materialDidacticoToSend: IMaterialDidacticoSend = {
      id: materialDidactico.obtenerId,
      nombreArchivo: materialDidactico.obtenerNombreArchivo,
      archivo: materialDidactico.obtenerArchivo,
      cursoId: materialDidactico.obtenerCurso.obtenerId,
      createdAt: materialDidactico.obtenerFechaCreacion ? materialDidactico.obtenerFechaCreacion : null,
      updatedAt: null
    }

    return materialDidacticoToSend;
  }

  createPDFAlumnos(personas: Array<IPersonaSend>){
    let heads = ['Nro. Cuenta', 'DNI', 'Nombre', 'Apellido', 'Teléfono', 'Celular', 'E-Mail'];
    let body = [];
    personas.forEach(persona => {
      body.push([persona.nroCuenta, persona.dni, persona.nombre, persona.apellido, persona.telefono, persona.celular, persona.email]);
    });
    this.createPDFWithTable('Alumnos', heads, body);
  }

  createPDFInformeInscripciones(inscripciones: Array<IInscripcionSend>, cursoName: string){
    let heads = ['Fecha de inscripcion', 'Nro. Cuenta', 'Apellido, Nombre', 'Teléfono', 'Celular', 'E-Mail'];
    let body = [];
    inscripciones.forEach(inscripcion => {
      body.push([inscripcion.fechaInscripcion, inscripcion.persona.nroCuenta, inscripcion.persona.apellido+', '+inscripcion.persona.nombre, inscripcion.persona.telefono, inscripcion.persona.celular, inscripcion.persona.email]);
    });
    this.createPDFWithTable(cursoName+' - Informe de Inscripción', heads, body);
  }

  createPDFWithTable(title, head, body){
    let doc = new jsPDF();
    autoTable(doc, {
      headStyles:{fillColor: [255, 0, 0], halign: 'center', valign: 'middle'},
      bodyStyles:{halign: 'center', valign: 'middle'},
      head: [head],
      body: body
    });

    doc.save(title+'.pdf');
  }

  sendPDFProgramaCurso(pdf, id){
    let send = {pdf: pdf, idCurso: id};
    return this.httpHelperSrv.post({url: this.urlSendProgramaCurso, body: send}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  sendPDFMaterialDidacticoCurso(materialDidactico: IMaterialDidacticoSend): Promise<MaterialDidacticoResponse>{
    return this.httpHelperSrv.post({url: this.urlSendMaterialDidactico, body: materialDidactico}).then(response =>{
      return response;
    }).catch(error => {
      return error.error;
    })
  }

  getPDFMaterialDidacticoByCurso(cursoId: number): Promise<MaterialDidacticoResponse>{
    let data = {'cursoId': cursoId};
    return this.httpHelperSrv.post({url: this.urlGetMaterialDidacticoByCurso, body: data}).then(result => {
      return result;
    })
  }

  downloadFile(cursoId: number, nombreArchivo: string){
    let data = {'cursoId': cursoId, 'nombreArchivo': nombreArchivo};
    return this.httpHelperSrv.post({url: this.urlDownloadMaterialDidactico, body: data}).then(result => {
      console.log(result);
      window.open(result);
      return result;
    }).catch(error =>{
      console.log(error);
      
    })
  }
}
