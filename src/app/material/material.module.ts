import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ]
})
export class AngularMaterialModule { }