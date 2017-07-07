import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrolPage } from '../cadastrol/cadastrol';
import { FiltrolPage } from '../filtrol/filtrol';


@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html'
})
export class LugaresPage {

  constructor(public navCtrl: NavController) {

  }

  cadastrol(){
      this.navCtrl.push(CadastrolPage);
  }
  filtrol(){
      this.navCtrl.push(FiltrolPage);
  }
}
