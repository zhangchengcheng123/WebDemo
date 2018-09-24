import { Component, OnInit, Input ,EventEmitter,Output,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
//  @Output() addEvent=new EventEmitter();
//  txt:string;
//  getValue(e){
//   if(e.keyCode==13){
//     this.add(this.txt);
//     this.txt="" 
//   }
//  }
//   add(eve){
//       this.addEvent.emit(eve)
//   }
 
  constructor() { }

  ngOnInit() {
  }

}
