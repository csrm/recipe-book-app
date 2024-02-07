import { Directive, HostListener, ElementRef, HostBinding} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event']) dropdownOpen(eventData: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(eventData.target)? !this.isOpen : false;
  }
}
