import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Course} from "../../../model/course.model";
import {User} from "../../../model/user.model";
import {DurationPipe} from "../../../pipes";
import {CustomDateComponent} from "../../../components/customDate/customDate.component";

@Component({
  selector: 'course',
  providers: [],
  directives: [CustomDateComponent],
  pipes: [DurationPipe],
  styleUrls: ['./course.style.scss'],
  templateUrl: './course.template.html'
})
export class CourseComponent {

  @Input('course')
  course: Course = new Course();

  @Input('authorCandidates')
  authorCandidates: User[];

  @Input('isBlank')
  isBlank: boolean;

  @Output('edit')
  editEvent = new EventEmitter();

  @Output('add')
  addEvent = new EventEmitter();

  @Output('cancel')
  cancelEvent = new EventEmitter();

  @Output('delete')
  deleteEvent = new EventEmitter();

  @Output('moveRight')
  moveRightEvent = new EventEmitter();

  @Output('moveLeft')
  moveLeftEvent = new EventEmitter();

  edit(){
    this.editEvent.emit(this.course);
  }

  delete(){
    this.deleteEvent.emit(this.course.id)
  }

  cancel(){
    this.cancelEvent.emit(this.course);
  }

  moveCandidateToRight(){
    this.moveRightEvent.emit(this.course);
  }

  moveCandidateToLeft(){
    this.moveLeftEvent.emit(this.course);
  }

}
