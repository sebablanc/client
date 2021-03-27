import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { uiModule } from 'src/app/ui/ui.module';
import { AlumnoCardComponent } from './alumno-card/alumno-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ResultRegisterModalComponent } from './result-register-modal/result-register-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ResultRegisterModalComponent,
    AlumnoCardComponent
  ],
  imports: [
    CommonModule,
    uiModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ResultRegisterModalComponent,
    AlumnoCardComponent
  ]
})
export class MyCommonModule {}