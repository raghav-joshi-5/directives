import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective implements OnInit {
  @Input() defaultColor!: string;
  @Input() highlightColor!: string;
  @Input() appHighlighter!: string;

  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-radius') border!: string;

  @HostListener('mouseover')
  onMouseOver() {
    this.bgColor = this.defaultColor;
    this.color = this.highlightColor;
    this.border = this.appHighlighter;
  }
  // @HostListener('mouseout')
  // onMouseOut() {
  //   this.bgColor = this.defaultColor;
  //   this.color = this.highlightColor;
  // }

  constructor() {}
  ngOnInit(): void {}
}
