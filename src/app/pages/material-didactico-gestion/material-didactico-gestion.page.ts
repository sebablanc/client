import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ArchivoModalComponent } from 'src/app/components/web/archivo-modal/archivo-modal.component';
import { Curso } from 'src/app/models/curso/curso';
import { MaterialDidactico } from 'src/app/models/material-didactico/materialDidactico';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';
import { CursoService } from 'src/app/services/curso/curso.service';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { ShareService } from 'src/app/services/share-service/share.service';

@Component({
  selector: 'app-material-didactico-gestion',
  templateUrl: './material-didactico-gestion.page.html',
  styleUrls: ['./material-didactico-gestion.page.scss'],
})
export class MaterialDidacticoGestionPage implements OnInit {

  cursoId: number;
  user: User;
  userTypes = UserTypes;
  curso: Curso = new Curso();
  materialDidacticoList: Array<MaterialDidactico>;

  constructor(private route: ActivatedRoute, 
    private userSingleton: UserSingleton,
    private modalCtrl: ModalController,
    private pdfSrv: PdfService,
    private shareSrv: ShareService,
    private cursoSrv: CursoService) { }

  ngOnInit() {
    this.user = this.userSingleton.instance();
    this.route.queryParams.subscribe(async params => {
      this.cursoId = params['id'] != 'null' ? params['id'] : null;
      if(this.cursoId){
        this.curso = new Curso();
        let response = await this.cursoSrv.getCursoById(this.cursoId);
        if(response && response.exito){
          Object.assign(this.curso, response.cursos[0]);
          this.obtenerMaterialDidactico();
        }
      }
    });
  }

  async obtenerMaterialDidactico(){
    let response = await this.pdfSrv.getPDFMaterialDidacticoByCurso(this.cursoId);
    if(response && response.exito){
      this.materialDidacticoList = [];
      let m: MaterialDidactico = new MaterialDidactico();
      response.cursoArchivos.forEach(cursoArchivo=>{
        Object.assign(m, cursoArchivo);
        this.materialDidacticoList.push(m);
      });
      console.log(this.materialDidacticoList);
    }
  }

  async createNewArchivo(){
    const modalData = await this.showModal(null);
    
    if(modalData.data){
      var materialDidactico: MaterialDidactico = new MaterialDidactico();
      Object.assign(materialDidactico, modalData.data);
      materialDidactico.cambiarCurso = this.curso;
      this.guardarMaterialDidactico(materialDidactico, true);
    }
  }


  async showModal(archivo: any){
    const modal = await this.modalCtrl.create({
      component: ArchivoModalComponent,
      backdropDismiss: false,
      cssClass: 'buscador-modal',
      componentProps: {
        'title': !archivo ? 'Cargando archivo' : 'Modificando archivo',
        'inputLabel': 'Nombre del archivo',
        'element': archivo
      }
    });
    
    await modal.present();
    const modalData = await modal.onWillDismiss();
    return modalData;
  }

  async guardarMaterialDidactico(data, create: boolean){
    if(data){
      var parsedMaterialDidactico = this.pdfSrv.parsePDFMaterialDidacticoToMaterialDidacticoSend(data);
      
      var response = null;

      if(create){
        response = await this.pdfSrv.sendPDFMaterialDidacticoCurso(parsedMaterialDidactico);
      } else {
        // TODO: actualizar archivo
        //response = await this.novedadSrv.updateNovedad(parsedNovedad);
      }
      
      
      if(response && response.exito){
        // TODO: obtener Listado Archivo por curso
        // this.obtenerNovedades();
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Archivo guardado correctamente', cssClass: 'SUCCESS_TOAST'})
      } else {
        this.shareSrv.presentToast({ message:response && response.messages && response.messages.length>0 ? response.messages[0] : 'Error al intentar guardar el archivo', cssClass: 'ERROR_TOAST'})
      }
    }
  }
}
