import {
  Component,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver
} from '@angular/core';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menu = 'menu';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {
  }

  ngOnInit() {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
      const componentRef =  this.viewContainerRef.createComponent(componentFactory);
    }, 3000);
  }

}
