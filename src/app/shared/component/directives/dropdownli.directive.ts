import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdownli]',
})
export class DropdownliDirective implements OnInit {
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}
  ngOnInit(): void {}
  @HostListener('click')
  toggleOpen() {
    // Select the second child of the <li> element
    const secondChild = this._elRef.nativeElement.children[1];

    if (secondChild) {
      //check the condition if secondChild is present
      // Toggle the 'show' class
      if (secondChild.classList.contains('show')) {
        //check the condition if secondChild has class 'show'
        this._renderer.removeClass(secondChild, 'show'); //remove the class 'show'
      } else {
        //if secondChild does not have class 'show'
        this._renderer.addClass(secondChild, 'show'); //add the class 'show'
      }
    }
  }
}
