import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  constructor(private local:CommonService) { }
  arr:Msg[]=[];
  arr1:number[]=[];
  counter:number=0;
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
        if(value.done){
          this.counter++;
          this.local.set("key",this.counter);
        }
    });
    this.arr1.push(this.counter);
    console.log(this.arr1.pop());
  }
  add(eve){
      this.arr.push(new Msg(eve,false)); 
      this.local.set("list",JSON.stringify(this.arr));
  }
  del(i){
    this.arr.splice(i,1);
    this.local.set("list",JSON.stringify(this.arr));
    this.count();
  }
  change(idx){
    this.arr[idx].done=! this.arr[idx].done;
    this.local.set("list",JSON.stringify(this.arr));
    this.count();
  }
  ngOnInit() {
    if(this.local.get("list")){
      this.arr=JSON.parse(this.local.get("list"));
   }else{
     this.arr=[];
   }
   if(this.local.get("key")){
    this.counter=parseInt(this.local.get("key"));
    }
  }

}
export class Msg{
  constructor(public title:string,public done:boolean) {}
}
