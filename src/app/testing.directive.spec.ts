import { TestingDirective } from './testing.directive';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  template: `<div appTesting (changes)='output = $event'></div>`,
})
export class TestingContainerComponent {
  public output: number;
}

describe('TestingDirective', () => {

  let container, fixture;

  // инициальзируем компонент:
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingContainerComponent, TestingDirective],
    });

    fixture = TestBed.createComponent(TestingContainerComponent);
    container = fixture.componentInstance;
  });


  it('should create an instance', () => {
    const directive = new TestingDirective();
    expect(directive).toBeTruthy();
  });

  it('should log clicks', () => {
    const div = fixture.nativeElements.querySelector('div');
    div.click();
    expect(container.output).toBe(1);
  });
});
