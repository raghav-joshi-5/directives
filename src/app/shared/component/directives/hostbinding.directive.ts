import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHostbinding]',
})
export class HostbindingDirective implements OnInit {
  @HostBinding('style.color') color!: string;
  //set the value of color to red by default

  @HostBinding('style.backgroundColor') bgColor!: string; //set the value of bgColor to yellow by default
  constructor() {}

  ngOnInit(): void {}
  // @HostBinding('style.border') border: string = '1px solid black'; //set the value of border to 1px solid black by default
  // @HostBinding('style.padding') padding: string = '10px'; //set the value of padding to 10px by default
  // @HostBinding('style.margin') margin: string = '10px'; //set the value of margin to 10px by default
  // @HostBinding('style.borderRadius') borderRadius: string = '10px'; //set the value of borderRadius to 10px by default

  @HostListener('mouseover') mouseover() {
    //listen to mouseover event
    this.color = 'blue'; //change the value of color to blue on mouseover
    this.bgColor = 'green'; //change the value of bgColor to green on mouseover
    // this.borderRadius = '20px'; //change the value of borderRadius to 20px on mouseover
  }
  @HostListener('mouseout') mouseout() {
    this.color = 'red'; //change the value of color to red on mouseleave
    this.bgColor = 'yellow'; //change the value of bgColor to yellow on mouseleave
    // this.borderRadius = '20px'; //change the value of borderRadius to 10px on mouseleave
  }
}
