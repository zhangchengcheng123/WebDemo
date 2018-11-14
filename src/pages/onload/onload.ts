import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import { HomePage } from '../home/home';

/**
 * Generated class for the OnloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onload',
  templateUrl: 'onload.html',
})
export class OnloadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnloadPage');
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }
  goReg(){
    this.navCtrl.push(RegPage);
  }
}
