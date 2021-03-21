import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { BurgerNewPageModule } from '../pages/burgers-list/burger-new/burger-new.module'
import { BurgersListPageModule } from '../pages/burgers-list/burgers-list.module'
import { BurgerPageModule } from '../pages/burgers-list/burger/burger.module'
import { TabPageModule } from '../pages/tab/tab.module'
import { AboutPageModule } from '../pages/about/about.module'
import { BurgerProvider } from '../providers/burger/burger'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { PhotosPageModule } from '../pages/photos/photos.module'
import { Camera } from '@ionic-native/camera'

const firebase = {
  apiKey: 'AIzaSyBmrQQCh62bf89g61c8K3vP-pOXqWGbYXo',
  authDomain: 'ionic-project-91f06.firebaseapp.com',
  projectId: 'ionic-project-91f06',
  storageBucket: 'ionic-project-91f06.appspot.com',
  messagingSenderId: '966466940430',
  appId: '1:966466940430:web:a1f3ef7ae44791a504565f',
}

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BurgerNewPageModule,
    BurgersListPageModule,
    BurgerPageModule,
    TabPageModule,
    AboutPageModule,
    PhotosPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BurgerProvider,
    Camera
  ],
})
export class AppModule {}
