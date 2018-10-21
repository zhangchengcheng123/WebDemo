import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-communitytail',
  templateUrl: './communitytail.component.html',
  styleUrls: ['./communitytail.component.css']
})
export class CommunitytailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/course').subscribe((data)=>{
      this.course=data;
  });
  }

}
