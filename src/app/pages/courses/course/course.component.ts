import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CourseService} from "../../../services/course.service";
import {Course} from "../../../model/course.model";
import {Router} from "@angular/router";

@Component({
  selector: 'course',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: ['./course.style.scss'],
  templateUrl: './course.template.html'
})
export class CourseComponent {

  @Input('course')
  course: Course;

  @Output('edit')
  editEvent = new EventEmitter();

  @Output('delete')
  deleteEvent = new EventEmitter();

  edit(){
    this.editEvent.emit(this.course);
  }

  delete(){
    this.deleteEvent.emit(this.course.id)
  }

}
