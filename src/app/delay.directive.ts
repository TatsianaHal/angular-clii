import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  constructor(
    // то, на что навесили директиву(содержимое обертки):
    private template: TemplateRef<any>,

    // обертка, которая создается вокруг template:
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    setTimeout(
      () => {this.view.createEmbeddedView(this.template);
      }, 2000);
  }

}
