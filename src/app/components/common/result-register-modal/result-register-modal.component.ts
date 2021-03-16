import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-result-register-modal',
  templateUrl: './result-register-modal.component.html',
  styleUrls: ['./result-register-modal.component.scss'],
})
export class ResultRegisterModalComponent implements OnInit {
  
  buttonConfig: IRoundedButtonConfig;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.buttonConfig = { text: 'Aceptar' };
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
