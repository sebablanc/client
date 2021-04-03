import { Injectable } from '@angular/core';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { IPersonaSend } from '../persona/personaService.interface';

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

  createPDFWithTable(title, head, body){
    let doc = new jsPDF();
    autoTable(doc, {
      headStyles:{halign: 'center', valign: 'middle'},
      bodyStyles:{halign: 'center', valign: 'middle'},
      head: [head],
      body: body
    });

    doc.save(title+'.pdf');
  }
}
