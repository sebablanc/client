import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    uiModule
  ],
  exports: [
    InscripcionesAlumnosInicioComponent,
    UserPerfilFormComponent
  ]
})
export class WebComponentsModule {}