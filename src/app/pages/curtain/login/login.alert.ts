export class LoginAlert {
  constructor(private _hasMessage: boolean = false, private _message: string =  ""){
    this._hasMessage = _hasMessage;
    this._message = _message;
  }

  public get hasMessage(): boolean {
    return this._hasMessage;
  }

  public set hasMessage(value: boolean) {
    this._hasMessage = value;
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }
}
