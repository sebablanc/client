import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { SwiperComponent } from './home-swiper/home-swiper.component';
import { InputDrComponent } from './input-dr/input-dr.component';
import { AngularMaterialModule } from '../material/material.module';
import { SelectDrComponent } from './select-dr/select-dr.component';
import { SmallBotoneraComponent } from './small-botonera/small-botonera.component';

@NgModule({
  declarations: [
    RoundedButtonComponent,
    SwiperComponent,
    InputDrComponent,
    SelectDrComponent,
    SmallBotoneraComponent
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    RoundedButtonComponent,
    SwiperComponent,
    InputDrComponent,
    SelectDrComponent,
    SmallBotoneraComponent
  ]
})
export class uiModule { }