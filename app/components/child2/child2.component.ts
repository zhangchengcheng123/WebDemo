import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() addEvent=new EventEmitter();
  txt:string;
  getValue(e){
   if(e.keyCode==13){
     this.add(this.txt);
     this.txt="" 
   }
  }
   add(eve){
       this.addEvent.emit(eve)
   }
  constructor() { }

  ngOnInit() {
  }

}
