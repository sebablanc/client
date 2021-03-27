import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-botonera',
  templateUrl: './small-botonera.component.html',
  styleUrls: ['./small-botonera.component.scss'],
})
export class SmallBotoneraComponent implements OnInit {
  @Output('leftButtonClicked') leftButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('rightButtonClicked') rightButtonClicked: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

}
