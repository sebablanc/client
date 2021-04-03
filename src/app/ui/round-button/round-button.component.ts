import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
})
export class RoundButtonComponent implements OnInit {
  
  @Input() name: string;
  @Output() roundButtonClicked: EventEmitter<boolean> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

}
