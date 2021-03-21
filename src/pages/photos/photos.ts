import { Component } from '@angular/core'
import { Camera, CameraOptions } from '@ionic-native/camera'
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  normalizeURL,
} from 'ionic-angular'

/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.Camera.DestinationType.DATA_URL,
    encodingType: this.Camera.EncodingType.JPEG,
    mediaType: this.Camera.MediaType.PICTURE,
    cameraDirection: 0,
  }

  imageUrl: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Camera: Camera,
    private Toast: ToastController,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage')
  }

  onPicture() {
    this.Camera.getPicture(this.options)
      .then((data) => {
        if (data) this.imageUrl = normalizeURL(data)
      })
      .catch((err) => {
        this.Toast.create({
          message: err,
          duration: 3000,
          position: 'bottom',
        }).present()
      })
  }
}
