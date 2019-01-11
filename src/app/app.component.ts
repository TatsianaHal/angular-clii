import {
  Component,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver
} from '@angular/core';
import { ItemComponent } from './item/item.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public menu = 'menu';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    _http: HttpClient
    ) {
      // _http.get('http://api.github.com/search/users').subscribe(result => {
      //   console.log('intercepter- result', result);
      // });
  }

  ngOnInit() {
    setTimeout(() => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
      const componentRef =  this.viewContainerRef.createComponent(componentFactory);
    }, 3000);
  }

}
