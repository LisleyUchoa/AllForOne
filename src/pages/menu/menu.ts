import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedicosPage } from '../medicos/medicos';
import { LugaresPage } from '../lugares/lugares';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }
  medicos(){
      this.navCtrl.push(MedicosPage);
  }

  lugares(){
      this.navCtrl.push(LugaresPage);
  }

}
