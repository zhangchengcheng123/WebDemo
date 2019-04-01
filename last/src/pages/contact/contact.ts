import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  // arr=["../assets/imgs/lg3.png","../assets/imgs/lgbg.png","明媚","在家中绽放","#灵感 #壁咚女人心 #个性色彩"];
  // arr=['["../assets/imgs/lg3.png","../assets/imgs/lgbg.png","明媚","在家中绽放","#灵感 #壁咚女人心 #个性色彩"]',
  // '["../assets/imgs/lg2.png","../assets/imgs/lgbg.png","蓝白","交织的秘境","#灵感 #个性色彩 #为青春造势"]',
  // '["../assets/imgs/lg1.jpg","../assets/imgs/lgbg.png","他","夏了夏天","#灵感 #宜家 #小清新"]'];
  constructor(public navCtrl: NavController) {

  }

}
