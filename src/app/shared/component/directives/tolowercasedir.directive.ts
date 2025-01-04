import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTolowercasedir]',
})
export class TolowercasedirDirective implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @HostListener('keyup', ['$event'])
  onKeyUp(event: Event) {
    let inputControl = event.target as HTMLInputElement;
    let value = inputControl.value as string;
    inputControl.value = value.toLowerCase();
  }
}
