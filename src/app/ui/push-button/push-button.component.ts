import { Component, Input, OnInit } from '@angular/core';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';

@Component({
  selector: 'app-push-button',
  templateUrl: './push-button.component.html',
  styleUrls: ['./push-button.component.scss'],
})
export class PushButtonComponent implements OnInit {

  @Input() curso: ICursoSend;

  constructor() { }

  ngOnInit() {}

}
