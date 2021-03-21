import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurgerNewPage } from './burger-new';

@NgModule({
  declarations: [
    BurgerNewPage,
  ],
  imports: [
    IonicPageModule.forChild(BurgerNewPage),
  ],
})
export class BurgerNewPageModule {}
