import { Component } from '@angular/core'
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular'
import { BurgerProvider } from '../../../providers/burger/burger'

/**
 * Generated class for the BurgerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-burger',
  templateUrl: 'burger.html',
})
export class BurgerPage {
  modif: boolean = false
  public title: string
  public id: string
  public burger: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Burger: BurgerProvider,
    private Toast: ToastController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.title = this.navParams.get('title')
    this.id = this.navParams.get('id')
    this.burger = this.Burger.getBurgerById(this.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerPage')
  }

  onGoAccessModif() {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir modifier ?',
      subTitle: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel',
        },
        {
          text: 'Confirmer',
          handler: () => (this.modif = !this.modif),
        },
      ],
    })

    alert.present()
  }

  onModif() {
    this.Burger.update(this.burger.data, this.burger.id).subscribe(() => {
      const toast = this.Toast.create({
        message: 'Changements sauvergardés',
        duration: 2000,
      })
      toast.present()
      this.modif = false
    })
  }
  onDelete() {
    this.Burger.delete(this.id)
    this.navCtrl.pop()
  }
}
