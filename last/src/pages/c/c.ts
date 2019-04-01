import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ChangePage } from '../change/change';
import { OnloadPage } from '../onload/onload';

/**
 * Generated class for the CPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c',
  templateUrl: 'c.html',
})
export class CPage {

  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }
  goChange(){
    this.navCtrl.push(OnloadPage);
  }
  ionViewDidLoad() {
  }
 
}
