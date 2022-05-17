import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './course';

@Component({
  templateUrl: './courses-info.component.html',
})
export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    }

    ngOnInit(): void {
      this.courseService.retrieveByID(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
        next:course => this.course = course,
        error: err => console.log('Error ', err)
      });
    }

    save(): void{
      this.courseService.save(this.course).subscribe({
        next:course => console.log('Save with sucess', course),
        error: err => console.log('Error ', err)

      });
    }

}
