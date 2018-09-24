import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  constructor(private local:CommonService) { }
  arr:Object[]=[];
  add(eve){
      this.arr.push({title:eve,done:false}); 
      this.local.set("list",JSON.stringify(this.arr));
  }
  ngOnInit() {
    if(this.local.get("list")){
      this.arr=JSON.parse(this.local.get("list"));
   }else{
     this.arr=[];
   }
  }

}
