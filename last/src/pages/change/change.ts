import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APage } from '../a/a';
import { OnloadPage } from '../onload/onload';
import { RegPage } from '../reg/reg';

/**
 * Generated class for the ChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change',
  templateUrl: 'change.html',
})
export class ChangePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePage');
  }

  goOnload(){
    this.navCtrl.push(OnloadPage);
  }
}
