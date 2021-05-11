import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso/curso';

@Component({
  selector: 'app-material-didactico',
  templateUrl: './material-didactico.component.html',
  styleUrls: ['./material-didactico.component.scss'],
})
export class MaterialDidacticoComponent implements OnInit {
  @Input() curso: Curso = new Curso();

  constructor() {
  }

  async ngOnInit() {
    
  }

}
