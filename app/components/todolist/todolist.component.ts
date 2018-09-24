// import { Component, OnInit } from '@angular/core';

// import { NgIf } from '@angular/common/src/directives/ng_if';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class TodolistComponent implements OnInit {
//   txt:string;
// counter:number=0;
// arr:Object[]=[];
// getValue(e){
//   if(e.keyCode==13){
//     this.arr.push({title:this.txt,done:false});
//     this.txt=' '
//     this.count();
//   }
// }
// count(){
//   this.counter=0;
//   this.arr.forEach((value,index)=>{
//       if(value.done){
//         this.counter++;
//       }
//   });
// }
// del(i){
//   this.arr.splice(i,1)
//   this.count();
// }
// change(idx){
//   this.arr[idx].done=! this.arr[idx].done;
//   this.count();
// }
//   constructor() { }

//   ngOnInit() {
//   }

// }
