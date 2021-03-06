import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CourseList} from "../../../model/courseList.model";

@Component({
  selector: 'search-row',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: ['./searchRow.style.scss'],
  templateUrl: './searchRow.template.html'
})
export class SearchRowComponent {

  searchingRow: string = "";

  @Output('find')
  findEvent = new EventEmitter();

  @Input('serviceForSearching')
  private servise: any;

  findCourses(){
    this.servise.getList(this.searchingRow, 0, 5).subscribe((res:CourseList) => {
      this.findEvent.emit(res);
    });
  }
}
