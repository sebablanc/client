import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InscripcionesAlumnosInicioComponent } from './inscripciones/inscripciones-alumnos-inicio/inscrpiciones-alumnos-inicio/inscripciones-alumnos-inicio.component';

@NgModule({
  declarations: [
      InscripcionesAlumnosInicioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InscripcionesAlumnosInicioComponent
  ]
})
export class WebComponentsModule {}