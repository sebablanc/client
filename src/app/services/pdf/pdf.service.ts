import { Injectable } from '@angular/core';
import { IInscripcionSend } from '../inscripcion/inscripcionService.interface';
import { IPersonaSend } from '../persona/personaService.interface';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

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
}
