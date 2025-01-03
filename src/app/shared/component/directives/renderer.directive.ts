import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]',
})
export class RendererDirective implements OnInit {
  constructor(private _eleref: ElementRef, private _renderer: Renderer2) {}
  ngOnInit(): void {
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
}
