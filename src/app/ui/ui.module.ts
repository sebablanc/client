import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';
import { SwiperComponent } from './home-swiper/home-swiper.component';

@NgModule({
  declarations: [RoundedButtonComponent, SwiperComponent],
  imports: [CommonModule],
  exports: [RoundedButtonComponent, SwiperComponent]
})
export class uiModule {}