import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { uiModule } from 'src/app/ui/ui.module';
import { AlumnoCardComponent } from './alumno-card/alumno-card.component';
import { ComisionCardComponent } from './comision-card/comision-card.component';
import { ComisionDataFormComponent } from './comision-data-form/comision-data-form.component';
import { CursoCardComponent } from './curso-card/curso-card.component';
import { CursoDataFormComponent } from './curso-data-form/curso-data-form.component';
import { InscripcionesAlumnosInicioComponent } from './inscripciones/inscripciones-alumnos-inicio/inscrpiciones-alumnos-inicio/inscripciones-alumnos-inicio.component';
import { ResultRegisterModalComponent } from './result-register-modal/result-register-modal.component';
import { UserPerfilFormComponent } from './user-perfil-form/user-perfil-form.component';
import { InscripcionesGestionInicioComponent } from './inscripciones/inscripciones-gestion-inicio/inscripciones-gestion-inicio.component';
import { InscripcionesAlumnosDatosComponent } from './inscripciones/inscripciones-alumnos-datos/inscripciones-alumnos-datos.component';
import { InscripcionesComisionesDatosComponent } from './inscripciones/inscripciones-comisiones-datos/inscripciones-comisiones-datos.component';

@NgModule({
  declarations: [
      InscripcionesAlumnosInicioComponent,
      UserPerfilFormComponent,
      CursoDataFormComponent,
      AlumnoCardComponent,
      ResultRegisterModalComponent,
      CursoCardComponent,
      ComisionDataFormComponent,
      ComisionCardComponent,
      InscripcionesGestionInicioComponent,
      InscripcionesAlumnosDatosComponent,
      InscripcionesComisionesDatosComponent
  ],
  imports: [
    CommonModule,
    uiModule,
    AngularMaterialModule
  ],
  exports: [
    InscripcionesAlumnosInicioComponent,
    UserPerfilFormComponent,
    CursoDataFormComponent,
    AlumnoCardComponent,
    ResultRegisterModalComponent,
    CursoCardComponent,
    ComisionDataFormComponent,
    ComisionCardComponent,
    InscripcionesGestionInicioComponent,
    InscripcionesAlumnosDatosComponent,
    InscripcionesComisionesDatosComponent
  ]
})
export class WebComponentsModule {}