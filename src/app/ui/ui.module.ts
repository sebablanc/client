import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { SwiperComponent } from './home-swiper/home-swiper.component';
import { InputDrComponent } from './input-dr/input-dr.component';
import { AngularMaterialModule } from '../material/material.module';
import { SelectDrComponent } from './select-dr/select-dr.component';
import { SmallBotoneraComponent } from './small-botonera/small-botonera.component';
import { BuscadorDrComponent } from './buscador-dr/buscador-dr.component';
import { RoundButtonComponent } from './round-button/round-button.component';
import { TextAreaDrComponent } from './text-area-dr/text-area-dr.component';
import { CheckboxDiasDrComponent } from './checkbox-dias-dr/checkbox-dias-dr.component';
import { PushButtonComponent } from './push-button/push-button.component';
import { RectangleButtonComponent } from './rectangle-button/rectangle-button.component';

@NgModule({
  declarations: [
    RoundedButtonComponent,
    SwiperComponent,
    InputDrComponent,
    SelectDrComponent,
    SmallBotoneraComponent,
    BuscadorDrComponent,
    RoundButtonComponent,
    TextAreaDrComponent,
    CheckboxDiasDrComponent,
    PushButtonComponent,
    RectangleButtonComponent
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [
    RoundedButtonComponent,
    SwiperComponent,
    InputDrComponent,
    SelectDrComponent,
    SmallBotoneraComponent,
    BuscadorDrComponent,
    RoundButtonComponent,
    TextAreaDrComponent,
    CheckboxDiasDrComponent,
    PushButtonComponent,
    RectangleButtonComponent
  ]
})
export class uiModule { }