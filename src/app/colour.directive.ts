import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appColour]',
})
export class ColourDirective {

  private counter = 0;

  // чтоб задать свойство:
  @HostBinding('style.color') myColor: string;

  // чтоб обработать событие:
  @HostListener('click', ['$event']) changeColor(event) {
    this.myColor = 'green';
    this.counter++;
    console.log(this.counter);
  }

  constructor() {
    this.myColor = 'blue';
  }

}
