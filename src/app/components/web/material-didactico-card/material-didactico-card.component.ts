import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialDidactico } from 'src/app/models/material-didactico/materialDidactico';
import { User } from 'src/app/models/user/user/user';
import { UserTypes } from 'src/app/models/user/user/user-types.enum';
import { UserSingleton } from 'src/app/models/user/user/userSingleton';

@Component({
  selector: 'app-material-didactico-card',
  templateUrl: './material-didactico-card.component.html',
  styleUrls: ['./material-didactico-card.component.scss'],
})
export class MaterialDidacticoCardComponent implements OnInit {
  @Input() user: User;
  @Input() materialDidactico: MaterialDidactico;
  @Input() index: number;
  @Output() emitDownloadAction: EventEmitter<MaterialDidactico> = new EventEmitter();
  @Output() emitDeleteAction: EventEmitter<MaterialDidactico> = new EventEmitter();
  userTypes = UserTypes;

  constructor(private userSingleton: UserSingleton) { }

  ngOnInit() {
    this.user = this.userSingleton.instance();
  }

}
