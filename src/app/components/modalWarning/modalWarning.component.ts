import {Component, Input} from '@angular/core';

@Component({
  selector: 'modal-warning',
  styleUrls: [
    './modalWarning.scss'
  ],
  templateUrl: './modalWarning.template.html'
})
export class ModalWarningComponent {

  private _title = "";
  private _content = "";
  private _okAction;

  @Input()
  private isShown: boolean;

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get okAction(): string {
    return this._okAction;
  }

  set okAction(value: string) {
    this._okAction = value;
  }

  show(){
    this.isShown = true;
    console.log("Modal is shown");
    // document.
  }
}
