import {FormControl} from "@angular/forms";

export function onlyNumbersValidator(control: FormControl) {
  const REGEX = /^\d+$/;
  if (!REGEX.test(control.value)){
    return{
      onlyLetters: true
    }
  }
  return null;
}
