import { Component, OnInit } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Subscription } from 'rxjs/Subscription'
import { BurgerProvider } from '../../providers/burger/burger'
import { BurgerNewPage } from './burger-new/burger-new'
import { BurgerPage } from './burger/burger'

/**
 * Generated class for the BurgersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burgers-list',
  templateUrl: 'burgers-list.html',
})
export class BurgersListPage implements OnInit {
  public burgers: any = []
  burgerSubscription: Subscription

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Burger: BurgerProvider,
  ) {}

  ngOnInit() {
    this.burgerSubscription = this.Burger.burgerSubject.subscribe(
      (listBurger) => {
        console.log(listBurger)
        this.burgers = listBurger
      },
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerListPage')
  }

  onGoToCreate() {
    this.navCtrl.push(BurgerNewPage)
  }

  onGoToBurger(burgerTitle: string, _id: string) {
    this.navCtrl.push(BurgerPage, { title: burgerTitle, id: _id })
  }
}
