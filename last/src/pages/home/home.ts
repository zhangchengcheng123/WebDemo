import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APage } from '../a/a';
import { InfiniteScroll } from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

isActive=0;
isClick(i){
  this.isActive=i;
}
arr=["推荐","家居","餐厨","床上用品"];

  @ViewChild('ac') ac;
  items= [];
  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  doInfinite(infiniteScroll) {
    this.http.get('/api/course').subscribe(data=>{
        console.log(data);
        infiniteScroll.complete();
    })
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  goSub(){
    this.navCtrl.push(APage);
  }
}
