import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from 'src/app/material/material.module';
import { uiModule } from 'src/app/ui/ui.module';
import { InscripcionesAlumnosInicioComponent } from './inscripciones/inscripciones-alumnos-inicio/inscrpiciones-alumnos-inicio/inscripciones-alumnos-inicio.component';
import { UserPerfilFormComponent } from './user-perfil-form/user-perfil-form.component';

@NgModule({
  declarations: [
      InscripcionesAlumnosInicioComponent,
      UserPerfilFormComponent
  ],
  imports: [
    CommonModule,
    uiModule,
    AngularMaterialModule
  ],
  exports: [
    InscripcionesAlumnosInicioComponent,
    UserPerfilFormComponent
  ]
})
export class WebComponentsModule {}