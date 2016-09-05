import {User} from "./user.model";
export class Course {
  private _id: Number = null;

  constructor(private _name: string = "",
              private _date: Date = new Date(),
              private _duration: Number = 0,
              private _description: string = "",
              private _authors: User[] = []) {
    this._name = _name;
    this._date = _date;
    this._duration = _duration;
    this._description = _description;
    this._authors = _authors;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get duration(): Number {
    return this._duration;
  }

  set duration(value: Number) {
    this._duration = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get authors(): User[] {
    return this._authors;
  }

  set authors(value: User[]) {
    this._authors = value;
  }
}
