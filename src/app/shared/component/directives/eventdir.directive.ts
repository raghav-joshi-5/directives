import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appEventdir]',
})
export class EventdirDirective implements OnInit {
  constructor(private _eleref: ElementRef, private _renderer: Renderer2) {}
  ngOnInit(): void {
    // Initialization logic here
  }

  // add @hostlistener
  @HostListener('mouseover') onMouseOver() {
    // add callback function
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'background-color',
      'red'
    );
    this._renderer.setStyle(this._eleref.nativeElement, 'color', 'white');
    this._renderer.setStyle(this._eleref.nativeElement, 'padding', '10px');
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'border-radius',
      '10px'
    );
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'font-family',
      'cursive'
    );
  }

  @HostListener('mouseout') onMouseout() {
    // add callback function
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'background-color',
      'green'
    );
    this._renderer.setStyle(this._eleref.nativeElement, 'color', 'yellow');
    this._renderer.setStyle(this._eleref.nativeElement, 'padding', '10px');
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'border-radius',
      '10px'
    );
    this._renderer.setStyle(
      this._eleref.nativeElement,
      'font-family',
      'cursive'
    );
  }
}
