import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[basicCss]',
})
export class csshighlighter implements OnInit {
  constructor(private _eleRef: ElementRef) {}

  ngOnInit(): void {
    this._eleRef.nativeElement.style.backgroundColor = 'navy';
    this._eleRef.nativeElement.style.color = 'white';
    this._eleRef.nativeElement.style.padding = '10px';
    this._eleRef.nativeElement.style.borderRadius = '10px';
    this._eleRef.nativeElement.style.fontFamily = 'cursive';
  }
}
