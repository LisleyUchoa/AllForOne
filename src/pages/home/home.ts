import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { MenuPage }    from '../menu/menu';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',


})
export class HomePage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController,
              public authenticationProvider: AuthenticationProvider) {

  }
  cadastro(){
      this.navCtrl.push(CadastroPage);
  }

  menu(){
      this.navCtrl.push(MenuPage);
  }

  login() {
    this.authenticationProvider.login(this.email, this.password).then(() => {
      this.menu();
    }).catch(error => {
      alert('Authentication failed.');
    });
  }


}
