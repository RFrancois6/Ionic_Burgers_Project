import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurgerPage } from './burger';

@NgModule({
  declarations: [
    BurgerPage,
  ],
  imports: [
    IonicPageModule.forChild(BurgerPage),
  ],
})
export class BurgerPageModule {}
