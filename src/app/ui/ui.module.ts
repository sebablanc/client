import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { SwiperComponent } from './home-swiper/home-swiper.component';
import { InputDrComponent } from './input-dr/input-dr.component';
import { AngularMaterialModule } from '../material/material.module';

@NgModule({
  declarations: [RoundedButtonComponent, SwiperComponent, InputDrComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [RoundedButtonComponent, SwiperComponent, InputDrComponent]
})
export class uiModule { }