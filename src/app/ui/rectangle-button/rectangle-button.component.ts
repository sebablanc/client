import { Component, Input, OnInit } from '@angular/core';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';

@Component({
  selector: 'app-rectangle-button',
  templateUrl: './rectangle-button.component.html',
  styleUrls: ['./rectangle-button.component.scss'],
})
export class RectangleButtonComponent implements OnInit {

  @Input() curso: ICursoSend;

  constructor() { }

  ngOnInit() {}

}
