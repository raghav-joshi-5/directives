import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreditcard]',
})
export class CreditcardDirective implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @HostListener('keyup', ['$event'])
  onKeyUp(event: Event) {
    //get the value from input control
    let inputControl = event.target as HTMLInputElement;
    let value = inputControl.value as string;

    //check if the value is 16 digits
    if (value.length > 16) {
      //remove the last digits usung substring
      value = value.substring(0, 16);
    }
    //print the value and its length
    console.log(value, value.length);

    //check the value is not a number with regular expression /[^\d]/
    if (/[^\d]/.test(value)) {
      //remove the d-none class from the error message
      inputControl.nextElementSibling?.classList.remove('d-none');
    } else {
      //add the d-none class to the error message
      inputControl.nextElementSibling?.classList.add('d-none');
    }

    //set the value back to the input control
    inputControl.value = value;
  }
}
