import { Component, OnInit, Input ,EventEmitter,Output,SimpleChanges } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private share:ShareService) { }
  arr;
  ngOnInit() {
    this.arr=this.share.data;
  }

}
