import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Course} from "../model/course.model";
import {Http} from "@angular/http";
import {User} from "../model/user.model";

@Injectable()
export class UserService {

  authorCandidatesList: User[] = [];

  constructor(private http: Http) {
    let candidateOne = new User("Vasily", "Pupkin");
    candidateOne.id = 1;
    this.authorCandidatesList.push(candidateOne);

    let candidateTwo = new User("Petr", "Sakhorov");
    candidateTwo.id = 2;
    this.authorCandidatesList.push(candidateTwo);

    let candidateTree = new User("Danila", "Gvozdev");
    candidateTree.id = 3;
    this.authorCandidatesList.push(candidateTree);
  };

  getAuthorCandidates(): Observable<User[]> {
    let self = this;
    return Observable.create(observer => {
      observer.next(self.authorCandidatesList);
    })
  }
}
