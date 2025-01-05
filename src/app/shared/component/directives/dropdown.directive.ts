import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(): void {}

  //add toggle show class
  @HostListener('click') // listen to the click event
  toggleOpen() {
    // function to toggle the class
    const nextSibling = this._elRef.nativeElement.nextElementSibling; // get the next sibling of the element

    if (nextSibling.classList.contains('show')) {
      // check if the class is already present or not if present  then remove it  else add it
      this._renderer.removeClass(nextSibling, 'show'); // remove the class if present
    } else {
      // if the class is not present then add it to the element next to the clicked element
      this._renderer.addClass(nextSibling, 'show'); // add the class if not present to the next sibling
    }
  }
}
