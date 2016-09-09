import {PipeTransform, Pipe} from "@angular/core";
import {CourseService} from "../services/course.service";
import {CourseList} from "../model/courseList.model";

@Pipe({
  name: 'courseListPipe'
})
export class CourseListPipe implements PipeTransform {

  constructor(private courseServise: CourseService){

  }

  transform(courses: any, additionalParameters: string){
    return this.courseServise.getList(additionalParameters, 0, 5).subscribe((res:CourseList) => {
      return res.courses;
    });
  }
}
