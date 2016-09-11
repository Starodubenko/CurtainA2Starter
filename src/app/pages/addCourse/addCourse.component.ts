import {Component} from '@angular/core';
import {Course} from "../../model/course.model";
import {CourseService} from "../../services/course.service";
import {CourseComponent} from "../courses/course/course.component";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'add-course',
  providers: [],
  directives: [CourseComponent],
  pipes: [],
  styleUrls: ['./addCourse.style.scss'],
  templateUrl: './addCourse.template.html'
})
export class AddCoursePage {

  course: Course = new Course();
  authorsCandidates: User[] = [];

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router){

  }

  ngOnInit(){
    let self = this;
    this.userService.getAuthorCandidates().subscribe((res: User[]) => {
      self.authorsCandidates = res;
    });
  }

  addCourse(newCourse: Course){
    this.courseService.addCourse(newCourse).subscribe((res:number) => {
      if (res) {
        this.router.navigate(['/courses-list']);
      }
    });
  }

  cancelAddCourse(){
    this.router.navigate(['/courses-list']);
  }

}
