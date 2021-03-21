import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurgersListPage } from './burgers-list';

@NgModule({
  declarations: [
    BurgersListPage,
  ],
  imports: [
    IonicPageModule.forChild(BurgersListPage),
  ],
})
export class BurgersListPageModule {}
