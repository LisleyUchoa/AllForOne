import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Alteração
import { AlertController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MenuPage } from '../pages/menu/menu';
import { SobrePage } from '../pages/sobre/sobre';
import { MelhoresPage } from '../pages/melhores/melhores';
import { DenunciadosPage } from '../pages/denunciados/denunciados';
//import { SairPage } from '../page/sair/sair';
import {MedicosPage} from '../pages/medicos/medicos';
import {LugaresPage} from '../pages/lugares/lugares';
import {CadastromPage} from '../pages/cadastrom/cadastrom';
import {CadastrolPage} from '../pages/cadastrol/cadastrol';
import {FiltromPage} from '../pages/filtrom/filtrom';
import {FiltrolPage} from '../pages/filtrol/filtrol';

import { App } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public alertCtrl: AlertController, private app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MenuPage, icon:'home' },
      { title: 'About', component: SobrePage, icon:'ios-flower-outline' },
      { title: 'Top', component: MelhoresPage, icon: 'md-trophy'},
      { title: 'Reported', component:DenunciadosPage, icon: 'md-megaphone' },
      //{ title: 'Sair', component: SairPage },
    ];

}

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.navCtrl.setRoot(MenuPage);
      }
    });
  }

openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  get navCtrl() {
    return this.app.getActiveNav();
  }
}
