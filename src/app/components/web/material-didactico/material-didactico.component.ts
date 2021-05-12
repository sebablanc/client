import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';
import { MaterialDidactico } from 'src/app/models/material-didactico/materialDidactico';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Component({
  selector: 'app-material-didactico',
  templateUrl: './material-didactico.component.html',
  styleUrls: ['./material-didactico.component.scss'],
})
export class MaterialDidacticoComponent implements OnInit {
  @Input() curso: Curso = new Curso();
  @Input() materialDidacticoList: Array<MaterialDidactico> = [];
  constructor(private pdfSrv: PdfService ) {
  }

  async ngOnInit() {
    
  }

  async downloadMaterialDidactico(event: MaterialDidactico){
    console.log('downloadMaterialDidactico');
    let algo = await this.pdfSrv.downloadFile(this.curso.obtenerId, event.obtenerNombreArchivo);
    window.open(algo)
  }

}
