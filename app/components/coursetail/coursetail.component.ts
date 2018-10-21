import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-coursetail',
  templateUrl: './coursetail.component.html',
  styleUrls: ['./coursetail.component.css']
})
export class CoursetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseTongId:number;
  courseTong;
  ngOnInit() {
    this.courseTongId=this.router.snapshot.params['courseTongId'];
    this.http.get('/api/course').subscribe((data)=>{
      this.courseTong=data;
  });
  }

}
