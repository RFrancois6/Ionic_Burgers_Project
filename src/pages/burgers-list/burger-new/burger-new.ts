import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BurgerProvider } from '../../../providers/burger/burger';

/**
 * Generated class for the BurgerNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burger-new',
  templateUrl: 'burger-new.html',
})
export class BurgerNewPage {
  public burger: any = {
    name: null,
    picture: null,
    country:null,
    brand: null,
    veggie: false
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Burger: BurgerProvider,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerNewPage')
  }

  onAdd() {
    this.Burger.saveNewBurger(this.burger).subscribe(() => {
      this.burger = {
        name: null,
        country: null,
        picture: false,
        brand: null,
        veggie: false,
      }
      this.navCtrl.pop()
    })
  }
}
