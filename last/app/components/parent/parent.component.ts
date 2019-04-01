import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[ShareService]
})
export class ParentComponent implements OnInit {

  constructor(private share:ShareService) { }
  add(){
    this.share.add(100);
}  
//   arr:string[]=[];
//   add(eve){
//       this.arr.push(eve)
//       this.local.set('list',this.arr);
//   }
//   data;
//   data1=['a','b','c'];
//   del(i){
//     this.data1.splice(i,1);
//     this.local.set('l',this.data1);
//   }
  ngOnInit() {
    // if(this.local.get("l")){
    //   this.data1=this.local.get("l").split(',');
    // }else{
    //   this.data1=['1','2','3','4','5','6','7'];
    // }
  }
  //   setTimeout(()=>{this.data=this.data1},3000)
  //   setInterval(()=>{
  //     this.data.push(2)
  //   },1000);
  // }

}
