import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardd]',
})
export class CarddDirective {
  constructor() {}
  @HostListener('keyup', ['$event'])
  onkeyUp(event: Event) {
    let inputControl = event.target as HTMLInputElement;
    let value = inputControl.value.replace(/\s+/g, '') as string;
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    if (/[^\d]/.test(value)) {
      inputControl.nextElementSibling?.classList.remove('d-none');
    } else {
      inputControl.nextElementSibling?.classList.add('d-none');
    }
    inputControl.value = value;
    let forval = this.format(value);
    inputControl.value = forval;
  }
  format(data: string): string {
    let chunk = [];
    for (let i = 0; i < data.length; i += 4) {
      chunk.push(data.slice(i, i + 4));
    }
    return chunk.join(' ');
  }
}
