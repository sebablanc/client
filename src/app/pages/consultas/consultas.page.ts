import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  form: FormGroup;
  buttonConfig: IRoundedButtonConfig;

  constructor(private formBuilder: FormBuilder, private _ngZone: NgZone) { }

  ngOnInit() {
    this.viewComponentsConfiguration();
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required], updateOn: 'change'}],
      apellido: ['', {validators: [Validators.required], updateOn: 'change'}],
      telefono: ['', {validators: [Validators.required], updateOn: 'change'}],
      email: ['', {validators: [Validators.required], updateOn: 'change'}],
      consulta: ['', {validators: [Validators.required], updateOn: 'change'}]
    });

    this.form.valueChanges.subscribe(ob => {
      console.log(ob);
    });
  }

  viewComponentsConfiguration(){
    this.buttonConfig = { text: 'Consultar' };
  }

  

  triggerResize() {
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
