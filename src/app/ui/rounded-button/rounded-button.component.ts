import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.scss'],
})
export class RoundedButtonComponent implements OnInit {

  @Input() config: IRoundedButtonConfig;
  @Output('buttonClicked') buttonClicked: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit() {}

}


export interface IRoundedButtonConfig{
  text: string;
  leftIcon?: string;
  rightIcon?: string;
}