import { AppPipeModule } from './../shared/pipe/app.pipe.module';
import { StarModule } from './../shared/components/star/star.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './courses-info.component';
import { CourseListComponent } from './couse-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,

  ],imports: [
    CommonModule,
    StarModule,
    FormsModule,
    AppPipeModule,
    RouterModule.forChild([

      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule{

}
