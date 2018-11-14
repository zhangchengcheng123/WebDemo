import { Component, ViewChild } from '@angular/core';
import { NavController, Slides  } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=["客厅","卧室","餐厅","书房","门厅"];
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController) {
    // change(){
    //   console.log();
    // }
  }

}
