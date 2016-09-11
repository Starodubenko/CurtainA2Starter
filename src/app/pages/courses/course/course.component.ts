import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Course} from "../../../model/course.model";
import {User} from "../../../model/user.model";
import {DurationPipe} from "../../../pipes";
import {CustomDateComponent} from "../../../components/customDate/customDate.component";
import {MultiSelectListComponent} from "../../../components/multiselectList/miltiSelectList.component";

@Component({
  selector: 'course',
  providers: [],
  directives: [CustomDateComponent, MultiSelectListComponent],
  pipes: [DurationPipe],
  styleUrls: ['./course.style.scss'],
  templateUrl: './course.template.html'
})
export class CourseComponent {

  @Input('course')
  course: Course = new Course();

  @Input('authorsCandidates')
  authorsCandidates: User[];

  @Input('authors')
  authors: User[];

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

  private selectedCanditates: number[];
  private selectedAuthors: number[];

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
    // let
    // let isAuthorsArrayBecameMore = new Array();
    // this.selectedCanditates.forEach((itemId) => {
    //   this.authors.forEach((user: User) => {user.id})
    // });
    //
    // this.course.authors.filter((id) => {});
    //
    // this.course.authors = this.selectedCanditates;
  }

  moveCandidateToLeft(){
    this.moveLeftEvent.emit(this.course);
  }

  mapUsersToOptions(users){
    return users ? users.map(user => ({value: user.id, name:user.firstName + "" + user.lastName})): [];
  }

  setSelectedCandidates(candidates){
    this.selectedCanditates = candidates;
  }

  setAuthors(authors){
    this.selectedAuthors = authors;
  }
}
