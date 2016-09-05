import {Component} from '@angular/core';
import {Course} from "../../model/course.model";
import {CourseService} from "../../services/course.service";
import {CourseComponent} from "./course/course.component";
import {SearchRowComponent} from "./searchRow/searchRow.component";

@Component({
  selector: 'course-list',
  providers: [],
  directives: [CourseComponent, SearchRowComponent],
  pipes: [],
  styleUrls: ['./courseList.style.scss'],
  templateUrl: './courseList.template.html'
})
export class CourseListPage {

  courseList: Course[];

  constructor(private courseService: CourseService){
    this.courseService.getList().subscribe((res:Course[]) => {
      this.courseList = res;
    });
  }

  deleteCourse(id: number){
    this.courseService.removeCourse(id).subscribe((res:boolean) => {
      if (res) {
        this.courseList = this.courseList.filter((item) => {
          return item.id != id;
        });
      }
    });
  }

  editCourse(course: Course){
    this.courseService.updateCourse(course).subscribe((res:boolean) => {
      if (res){
        for(let i=0;
            i < this.courseList.length &&
            this.courseList[i].id != course.id; i++) {

          i < this.courseList.length ?
            this.courseList[i] = course :
            this.courseList.push(course);
        }
      }
    });
  }

}
