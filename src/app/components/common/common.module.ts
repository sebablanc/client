import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { uiModule } from 'src/app/ui/ui.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    uiModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MyCommonModule {}