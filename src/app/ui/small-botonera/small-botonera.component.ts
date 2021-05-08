import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-small-botonera',
  templateUrl: './small-botonera.component.html',
  styleUrls: ['./small-botonera.component.scss'],
})
export class SmallBotoneraComponent implements OnInit {
  @Output('leftButtonClicked') leftButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('rightButtonClicked') rightButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Output('middleButtonClicked') middleButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Input() config: smallBotonerConfig;

  constructor() { }

  ngOnInit() {}

}


export interface smallBotonerConfig{
  needLeftButton: boolean;
  needMiddleButton: boolean;
  needRightButton: boolean;
}