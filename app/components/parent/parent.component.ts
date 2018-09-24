// import { Component, OnInit } from '@angular/core';
// import { CommonService } from 'src/app/services/common.service';

// @Component({
//   selector: 'app-parent',
//   templateUrl: './parent.component.html',
//   styleUrls: ['./parent.component.css']
// })
// export class ParentComponent implements OnInit {
//   constructor(private local:CommonService) { 

//   }
//   arr:string[]=[];
//   add(eve){
//       this.arr.push(eve)
//       this.local.set('list',this.arr);
//   }
//   data;
//   data1=['a','b','c'];
//   del(i){
//     this.data.splice(i,1);
//     this.local.set('list',this.data);
//   }
//   ngOnInit() {
//     if(this.local.get("list")){
//       this.data1=this.local.get("list").split(',');
//     }else{
//       this.data1=['1','2','3','4','5','6','7'];
//     }
//   }



























//   //   setTimeout(()=>{this.data=this.data1},3000)
//   //   setInterval(()=>{
//   //     this.data.push(2)
//   //   },1000);
//   // }

// }
