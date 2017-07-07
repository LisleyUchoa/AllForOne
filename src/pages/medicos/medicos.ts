import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastromPage } from '../cadastrom/cadastrom';
import { FiltromPage } from '../filtrom/filtrom';


@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html'
})
export class MedicosPage {

  constructor(public navCtrl: NavController) {

  }

  cadastrom(){
      this.navCtrl.push(CadastromPage);
  }
  filtrom(){
      this.navCtrl.push(FiltromPage);
  }

}
