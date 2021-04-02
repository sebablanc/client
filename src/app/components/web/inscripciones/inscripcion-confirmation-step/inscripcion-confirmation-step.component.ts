import { Component, Input, OnInit } from '@angular/core';
import { Inscripcion } from 'src/app/models/inscripcion/inscripcion';

@Component({
  selector: 'app-inscripcion-confirmation-step',
  templateUrl: './inscripcion-confirmation-step.component.html',
  styleUrls: ['./inscripcion-confirmation-step.component.scss'],
})
export class InscripcionConfirmationStepComponent implements OnInit {

  @Input() inscripcion: Inscripcion;

  constructor() { }

  ngOnInit() {
  }

}
