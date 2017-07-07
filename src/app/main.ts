import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import firebase from 'firebase';

platformBrowserDynamic().bootstrapModule(AppModule);
firebase.initializeApp({
     apiKey: 'AIzaSyCJxh64gXC7zNqaZc4YSgkmTcHERyEorpQ',
     authDomain: 'aplicativoallforone.firebaseapp.com',
     databaseURL: 'aplicativoallforone.firebaseio.com',
     storageBucket: 'aplicativoallforone.appspot.com'
});
