import {Component} from '@angular/core';
import {Course} from "../../model/course.model";
import {CourseService} from "../../services/course.service";
import {CourseComponent} from "../courses/course/course.component";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'edit-course',
  providers: [],
  directives: [CourseComponent],
  pipes: [],
  styleUrls: ['./editCourse.style.scss'],
  templateUrl: './editCourse.template.html'
})
export class EditCoursePage {

  course: Course = new Course();
  authorCandidates: User[] = [];

  constructor(private courseService: CourseService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    let self = this;
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.courseService.getCourse(id)
        .subscribe((res:Course) => {
          self.course = res;
        });
      this.userService.getAuthorCandidates().subscribe((res: User[]) => {
        self.authorCandidates = res;
      });
    });
  }

  deleteCourse(id){
    this.courseService.removeCourse(id).subscribe((res:boolean) => {
      if (res) {
        this.router.navigate(['/courses-list']);
      }
    });
  }

  saveCourse(course: Course){
    this.courseService.updateCourse(course).subscribe((res:boolean) => {
      if (res){
        this.router.navigate(['/courses-list']);
      }
    });
  }

}
