import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  constructor(private local:CommonService) { }
  @Input() arr
  counter:number=0;
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
        if(value.done){
          this.counter++;
          this.local.set("key",this.counter);
        }
    });
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
    if(this.local.get("key")){
      this.counter=parseInt(this.local.get("key"));
   }
  }
}
