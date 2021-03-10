import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MyCommonModule } from '../common/common.module';


@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MyCommonModule
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }