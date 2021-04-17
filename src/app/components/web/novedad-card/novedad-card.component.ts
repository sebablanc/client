import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { INovedadSend } from 'src/app/services/novedad/novedadService.interface';

@Component({
  selector: 'app-novedad-card',
  templateUrl: './novedad-card.component.html',
  styleUrls: ['./novedad-card.component.scss'],
})
export class NovedadCardComponent implements OnInit {

  @Input() novedad: INovedadSend;
  @Input() user: User;
  @Output() editNovedad: EventEmitter<INovedadSend> = new EventEmitter();
  @Output() deleteNovedad: EventEmitter<INovedadSend> = new EventEmitter();

  userTypes = UserTypes;

  constructor() { }

  ngOnInit() {}

}
