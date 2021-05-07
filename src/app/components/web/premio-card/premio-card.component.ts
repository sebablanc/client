import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-premio-card',
  templateUrl: './premio-card.component.html',
  styleUrls: ['./premio-card.component.scss'],
})
export class PremioCardComponent implements OnInit {

  @Input() premio: any;
  @Input() selected: boolean;
  
  constructor() { }

  ngOnInit() {}

}
