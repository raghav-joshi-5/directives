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
    //replace the space value with empty value because of that user can not enter the space manually
    let value = inputControl.value.replace(/\s+/g, '') as string;
    //check if the value is 16 digits
    if (value.length > 16) {
      //remove the last digits using substring
      value = value.substring(0, 16);
    }

    //print the value and its length
    console.log(value, value.length);
    //check the value is not a number with regular expression /[^\d]/
    if (/[^\d]/.test(value)) {
      // if this condition is true then this will remove d-none class from strong class
      //remove the d-none class from the error message
      inputControl.nextElementSibling?.classList.remove('d-none');
    } else {
      // if the condition is false then this condition will add the d-none class to strong
      //add the d-none class to the error message
      inputControl.nextElementSibling?.classList.add('d-none');
    }
    //set the value back to the input control
    inputControl.value = value;

    //call this function to call the function format that function will set the array in [[1234],[1234],[1234],[1234]]
    let formatVal = this.formatCreditCardVal(value);
    //pass this value to the function formatCreditCardVal
    inputControl.value = formatVal;
  }
  formatCreditCardVal(data: string): string {
    let arrayChunck = [];
    for (let i = 0; i < data.length; i = i + 4) {
      arrayChunck.push(data.slice(i, i + 4));
    }
    console.log(arrayChunck);
    return arrayChunck.join(' ');
  }
}
