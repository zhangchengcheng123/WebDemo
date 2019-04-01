import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  constructor(private local:CommonService) { }
  @Input() arr
  @Output() delEvent=new EventEmitter();
  @Output() changeEvent=new EventEmitter(); 
  del(i){
    this.delEvent.emit(i);
  }
  change(idx){
    this.changeEvent.emit(idx);
  }
  ngOnInit() {
   
  }
}
