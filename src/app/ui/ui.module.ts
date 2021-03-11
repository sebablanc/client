import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';

@NgModule({
  declarations: [RoundedButtonComponent],
  imports: [CommonModule],
  exports: [RoundedButtonComponent]
})
export class uiModule {}