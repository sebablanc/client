import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona/persona';
import { IPersonaSend } from 'src/app/services/persona/personaService.interface';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.scss'],
})
export class AlumnoCardComponent implements OnInit {

  @Input() persona: IPersonaSend;

  constructor() { }

  ngOnInit() {
  }

}
