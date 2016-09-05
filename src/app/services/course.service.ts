import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Course} from "../model/course.model";
import {Http} from "@angular/http";

@Injectable()
export class CourseService {

  courseList: Course[] = [];

  constructor(private http: Http) {
    let courseOne = new Course(
      "First course",
      new Date(),
      120,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto autem, dicta maxime pariatur porro quisquam sapiente tempore! Illo illum nemo neque pariatur repudiandae vel voluptas. Adipisci alias amet asperiores assumenda aut consectetur consequatur cumque cupiditate, dicta dignissimos dolor dolorem dolores doloribus dolorum eligendi et eveniet hic impedit inventore ipsa laborum minus nemo nihil nisi nostrum nulla officiis porro possimus praesentium provident quo quos reiciendis, repellat sequi similique, veritatis vero! Amet dolor eveniet incidunt sunt unde! Cupiditate harum illo minima nesciunt nisi nobis provident sint! Debitis deserunt doloremque illo ipsum laborum praesentium reprehenderit. At cum est explicabo iste quo sapiente!");
    courseOne.id = 1;
    this.courseList.push(courseOne);

    let courseTwo = new Course(
      "Second course",
      new Date(),
      120,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto autem, dicta maxime pariatur porro quisquam sapiente tempore! Illo illum nemo neque pariatur repudiandae vel voluptas. Adipisci alias amet asperiores assumenda aut consectetur consequatur cumque cupiditate, dicta dignissimos dolor dolorem dolores doloribus dolorum eligendi et eveniet hic impedit inventore ipsa laborum minus nemo nihil nisi nostrum nulla officiis porro possimus praesentium provident quo quos reiciendis, repellat sequi similique, veritatis vero! Amet dolor eveniet incidunt sunt unde! Cupiditate harum illo minima nesciunt nisi nobis provident sint! Debitis deserunt doloremque illo ipsum laborum praesentium reprehenderit. At cum est explicabo iste quo sapiente!");
    courseTwo.id = 2;
    this.courseList.push(courseTwo);

    let courseThree = new Course(
      "Third course",
      new Date(),
      120,
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto autem, dicta maxime pariatur porro quisquam sapiente tempore! Illo illum nemo neque pariatur repudiandae vel voluptas. Adipisci alias amet asperiores assumenda aut consectetur consequatur cumque cupiditate, dicta dignissimos dolor dolorem dolores doloribus dolorum eligendi et eveniet hic impedit inventore ipsa laborum minus nemo nihil nisi nostrum nulla officiis porro possimus praesentium provident quo quos reiciendis, repellat sequi similique, veritatis vero! Amet dolor eveniet incidunt sunt unde! Cupiditate harum illo minima nesciunt nisi nobis provident sint! Debitis deserunt doloremque illo ipsum laborum praesentium reprehenderit. At cum est explicabo iste quo sapiente!");
    courseThree.id = 3;
    this.courseList.push(courseThree);
  };

  getCourse(id: number): Observable<Course> {
    return Observable.create(observer => {
      observer.next(this.courseList.filter(function (item) {
        return item.id === id;
      })[0])
    })
  }

  getList(): Observable<Course[]> {
    return Observable.create(observer => {
      observer.next(this.courseList);
    })
  }

  addCourse(newCourse: Course): Observable<number> {
    return Observable.create(observer => {
      let result = true;
      this.courseList.push(newCourse);
      observer.next(result);
    })
  }

  removeCourse(id: number): Observable<boolean> {
    return Observable.create(observer => {
      let result = false;
      this.courseList = this.courseList.filter((item) => {
        if (item.id == id) {
          result = true;
        }
        return item.id != id;
      });
      observer.next(result);
    })
  }

  updateCourse(course: Course): Observable<boolean> {
    return Observable.create(observer => {
      let oldLength = this.courseList.length;
      for (let i = 0;
           i < this.courseList.length &&
           this.courseList[i].id != course.id; i++) {

        i < this.courseList.length ?
          this.courseList[i] = course :
          this.courseList.push(course);
      }
      observer.next(this.courseList.length > oldLength);
    });
  }
}
