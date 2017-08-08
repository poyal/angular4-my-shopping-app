import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') openClass: boolean;

  ngOnInit() {
    this.openClass = false;
  }

  @HostListener('click', ['$event.target'])
  toggleOpen(targetElement) {
    console.log(targetElement);
    this.openClass = !this.openClass;
  }
}
