import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso-data-gestion',
  templateUrl: './curso-data-gestion.page.html',
  styleUrls: ['./curso-data-gestion.page.scss'],
})
export class CursoDataGestionPage implements OnInit {

  cursoId: number;
  title: string = 'Agregando curso';

  constructor(private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cursoId = params['id'] != 'null' ? params['id'] : null;
      if (this.cursoId) {
        this.title = 'Modificando curso';
      }
    });
  }

  
}