import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ICursoSend } from 'src/app/services/curso/cursoService.interface';
import { IRoundedButtonConfig } from 'src/app/ui/rounded-button/rounded-button.component';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.page.html',
  styleUrls: ['./curso-detail.page.scss'],
})
export class CursoDetailPage implements OnInit {
  @Input() curso: ICursoSend;

  backConfig: IRoundedButtonConfig;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.curso = this.router.getCurrentNavigation().extras.state.curso;
      }
    });
    this.backConfig = {
      text: 'Volver',
      leftIcon: 'arrow-back'
    };
  }

  back(){
    this.navCtrl.back();
  }
}
