import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http :HttpClient) { }
  course;
headers=new HttpHeaders({});
  ngOnInit() {
    // this.http.get('/api/course/1').subscribe((data)=>{
    //   this.course=data;
    //   console.log(data);
    // })
    // post请求
    // this.http.post('/api',{name:'lunguanjun',pwd:12345},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    // })
  }
  ngOnDestroy():void{
  }
}
