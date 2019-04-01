import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Router} from '@angular/router';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { Child1Component } from './components/child1/child1.component';
import { CommonService} from './services/common.service';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { ParentComponent } from './components/parent/parent.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child4Component } from './components/child4/child4.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TaskComponent } from './components/task/task.component';
import { TongComponent } from './components/tong/tong.component';
import { ClassComponent } from './components/class/class.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { componentFactoryName } from '@angular/compiler';
import { APipe } from './a.pipe';
import { CoursetailComponent } from './components/coursetail/coursetail.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { CommunitytailComponent } from './components/communitytail/communitytail.component';



@NgModule({
  declarations: [
     AppComponent,
     ChildComponent,
     Child1Component,
     Child2Component,
     Child3Component,
     ParentComponent,
     Parent1Component,
     Child4Component,
     HeaderComponent,
     HomeComponent,
     TongbuComponent,
     CourseComponent,
     CommunityComponent,
     TongbudetailComponent,
     TaskComponent,
     TongComponent,
     ClassComponent,
     QieshuoComponent,
     APipe,
    CoursetailComponent,
    TongzhiComponent,
    CommunitytailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:  HomeComponent,children:[
        {path:'task',component:TaskComponent},
        {path:'tong',component:TongComponent},
        {path:'class',component:ClassComponent},
        {path:'qieshuo',component:QieshuoComponent},
        {path:'tongzhi',component:TongzhiComponent},
        {path:'',redirectTo:'task',pathMatch:'full'},
      ]},
      {path:'tongbu',component: TongbuComponent},
      {path:'tongbu/:courseId',component: TongbudetailComponent},
      {path:'course',component:  CourseComponent},
      {path:'course/:courseTongId',component: CoursetailComponent},
      {path:'community',component: CommunityComponent},
      {path:'community:courseId',component:  CommunitytailComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:CommunityComponent},
    ]),
    HttpClientModule
  ],
  providers: [
    {provide:CommonService,useClass:CommonService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
