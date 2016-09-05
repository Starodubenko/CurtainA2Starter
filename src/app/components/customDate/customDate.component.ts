import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'custom-date',
  styleUrls: [
    './customDate.scss'
  ],
  templateUrl: './customDate.template.html'
})
export class CustomDateComponent implements OnInit {

  private dateFormat = "dd.MM.yyyy";
  private dateRegexStartSymbol = '^';
  private dateRegexEndSymbol = '$';
  private dateDayRegex = '(?:0?\\d]?|1\\d?|2\\d?|3[1-2]?)';
  private dateMonthRegex = '(?:(?:0?\\d?)|(?:1[0-2]?))';
  private dateYearRegex = '(\\d){1,4}';
  private datePointRegex = '(\\.)';
  private formControl: FormControl = new FormControl();

  @Input('date')
  private date;

  private oldDate = null;

  constructor(){
    let firstCheckSubscription = this.formControl.valueChanges.subscribe((date) => {
      let datePipe = new DatePipe();
      firstCheckSubscription.unsubscribe();
      if (!(new RegExp(this.dateRegexStartSymbol +
          this.dateDayRegex +
          this.datePointRegex +
          this.dateMonthRegex +
          this.datePointRegex +
          this.dateYearRegex +
          this.dateRegexEndSymbol).test(this.date.toString()))) {
        this.oldDate = datePipe.transform(this.date, this.dateFormat);
        this.formControl.updateValue(datePipe.transform(this.date, this.dateFormat));
      }
    });
  }

  ngOnInit() {
    this.oldDate = this.date;
    this.formControl.valueChanges.subscribe((date) => {
      if (date != this.oldDate) {
        if (new RegExp(this.dateRegexStartSymbol +
            this.dateDayRegex +
            this.dateRegexEndSymbol).test(date)) {
          this.date = date;
          this.oldDate = this.date;
        } else if (new RegExp(this.dateRegexStartSymbol +
            this.dateDayRegex +
            this.datePointRegex +
            this.dateRegexEndSymbol).test(date)) {
          this.date = date;
          this.oldDate = this.date;
        } else if (new RegExp(this.dateRegexStartSymbol +
            this.dateDayRegex +
            this.datePointRegex +
            this.dateMonthRegex +
            this.dateRegexEndSymbol).test(date)) {
          this.date = date;
          this.oldDate = this.date;
        } else if (new RegExp(this.dateRegexStartSymbol +
            this.dateDayRegex +
            this.datePointRegex +
            this.dateMonthRegex +
            this.datePointRegex +
            this.dateRegexEndSymbol).test(date)) {
          this.date = date;
          this.oldDate = this.date;
        } else if (new RegExp(this.dateRegexStartSymbol +
            this.dateDayRegex +
            this.datePointRegex +
            this.dateMonthRegex +
            this.datePointRegex +
            this.dateYearRegex +
            this.dateRegexEndSymbol).test(date)) {
          this.date = date;
          this.oldDate = this.date;
        } else {
          this.formControl.updateValue(this.oldDate);
        }
      }
    })
  }
}
