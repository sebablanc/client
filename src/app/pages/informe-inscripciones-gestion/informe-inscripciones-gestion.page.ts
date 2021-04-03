import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { InscripcionService } from 'src/app/services/inscripcion/inscripcion.service';
import { IInscripcionSend } from 'src/app/services/inscripcion/inscripcionService.interface';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Component({
  selector: 'app-informe-inscripciones-gestion',
  templateUrl: './informe-inscripciones-gestion.page.html',
  styleUrls: ['./informe-inscripciones-gestion.page.scss'],
})
export class InformeInscripcionesGestionPage implements OnInit {

  inscripcionesList: Array<IInscripcionSend>;
  curso: ICursoSend;
  fechaInicio: Date;
  fechaFin: Date;

  constructor(private route: ActivatedRoute, private inscripcionSrv: InscripcionService, private router: Router, private pdfSrv: PdfService) { }

  async ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.curso = this.router.getCurrentNavigation().extras.state.curso;
        this.fechaInicio = this.router.getCurrentNavigation().extras.state.fechaInicio;
        this.fechaFin = this.router.getCurrentNavigation().extras.state.fechaFin;
      }

      if(!this.curso) return;

      let response = await this.inscripcionSrv.getInscripcionesList();
      this.inscripcionesList = [];
      if(response && response.exito && response.personasComisiones && response.personasComisiones.length>0){
        response.personasComisiones.forEach(inscripcion =>{
          
          let byFechaInicio = false
          if((this.fechaInicio && inscripcion.fechaInscripcion >= this.fechaInicio) || !this.fechaInicio){
            byFechaInicio = true;
          }

          let byFechaFin = false
          if((this.fechaFin && inscripcion.fechaInscripcion >= this.fechaFin) || !this.fechaFin){
            byFechaFin = true;
          }

          let byCurso = false;
          if((this.curso && this.curso.id && inscripcion.comision && inscripcion.comision.cursoId == this.curso.id) || !this.curso){
            byCurso = true;
          }

          if(byFechaInicio && byFechaInicio && byCurso){
            this.inscripcionesList.push(inscripcion);
          }
        })
      }
    });
  }

  downloadDataList(){
    this.pdfSrv.createPDFInformeInscripciones(this.inscripcionesList, this.curso.nombre);
  }

}
