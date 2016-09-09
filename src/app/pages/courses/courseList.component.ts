import {Component} from '@angular/core';
import {Course} from "../../model/course.model";
import {CourseService} from "../../services/course.service";
import {CourseComponent} from "./course/course.component";
import {SearchRowComponent} from "./searchRow/searchRow.component";
import {CourseList} from "../../model/courseList.model";

@Component({
  selector: 'course-list',
  providers: [],
  directives: [CourseComponent, SearchRowComponent],
  pipes: [],
  styleUrls: ['./courseList.style.scss'],
  templateUrl: './courseList.template.html'
})
export class CourseListPage {

  courseList: CourseList;

  private findService: CourseService;

  constructor(private courseService: CourseService){
    this.findService = courseService;
    this.courseService.getList().subscribe((res:CourseList) => {
      this.courseList = res;
    });
  }

  setSearchedList(searchedCourseList){
    this.courseList = searchedCourseList;
  }

  deleteCourse(id: number){
    this.courseService.removeCourse(id).subscribe((res:boolean) => {
      if (res) {
        this.courseList.courses = this.courseList.courses.filter((item) => {
          return item.id != id;
        });
      }
    });
  }

  editCourse(course: Course){
    this.courseService.updateCourse(course).subscribe((res:boolean) => {
      if (res){
        for(let i=0;
            i < this.courseList.courses.length &&
            this.courseList[i].id != course.id; i++) {

          i < this.courseList.courses.length ?
            this.courseList[i] = course :
            this.courseList.courses.push(course);
        }
      }
    });
  }

}
