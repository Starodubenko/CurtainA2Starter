export class Course {
  private _id: Number = null;
  constructor(private _name: string,
              private _date: Date,
              private _duration: Number,
              private _describtion: string) {
    this._name = _name;
    this._date = _date;
    this._duration = _duration;
    this._describtion = _describtion;
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

  get describtion(): string {
    return this._describtion;
  }

  set describtion(value: string) {
    this._describtion = value;
  }
}
