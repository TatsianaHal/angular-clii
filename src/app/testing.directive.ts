import {
  Directive,
  HostListener,
  Output,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appTesting]'
})
export class TestingDirective {

  @Output() changes = new EventEmitter;
  private _counter = 0;

  @HostListener('click') onclick() {
    this._counter++;
    this.changes.emit(this._counter);
  }

  constructor() { }

}
