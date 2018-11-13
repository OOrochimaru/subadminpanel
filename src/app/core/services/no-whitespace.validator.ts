import { AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

// export function NoWhitespaceValidator(): ValidatorFn {

//   return (control: AbstractControl): { [key: string]: any } => {

//      // messy but you get the idea
//     let isWhitespace = (control.value || '').trim().length === 0;
//     let isValid = !isWhitespace;
//     console.log(isValid);
//     return isValid ? null : { 'whitespace': 'true' }

//   };
// }

export function  noWhitespaceValidator(control: FormControl) {
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;
  return isValid ? null : { 'whitespace': true };
}