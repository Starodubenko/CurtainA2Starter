import {ViewChild, Component, Output, Input, EventEmitter} from '@angular/core';
import {SelectOption} from "../../model/selectOption.model";

@Component({
  selector: 'multi-select-list',
  styleUrls: [
    './miltiSelectList.scss'
  ],
  templateUrl: './miltiSelectList.template.html'
})
export class MultiSelectListComponent {

  @Input('options')
  private options: SelectOption[];

  private selectedItems: number[];

  @Output('selectedHaveChanged')
  selectedHaveChangedEvent = new EventEmitter();

  change(options) {
    this.selectedItems = Array.apply(null,options)
      .filter(option => option.selected)
      .map(option => option.value);
    this.selectedHaveChangedEvent.emit(this.selectedItems)
  }
}
