import {
  Component,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver
} from '@angular/core';
import { ItemComponent } from './item/item.component';
import { HttpClient } from '@angular/common/http';
import { FormControl, Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nameControl: FormControl;
  fullNameControl: FormGroup;
  userListControl: FormGroup;

  public menu = 'menu';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    _http: HttpClient,
    // private FormBuilder: FormBuilder
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

    this.nameControl = new FormControl('Ananas', [Validators.required, Validators.minLength(3)]);
    this.nameControl.valueChanges.subscribe(value => console.log('value:', value));
    this.nameControl.statusChanges.subscribe(status => console.log('status:', status));

    this.fullNameControl = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });

    this.fullNameControl.valueChanges.subscribe(value => console.log('FormGroup value:', value));

    this.userListControl = new FormGroup({
      users: new FormArray([
        new FormControl('Bob'),
        new FormControl('Tad'),
        new FormControl('John')
      ])
    });
    this.userListControl.valueChanges.subscribe(value => console.log('FormArray value:', value));
    // и аналогично, но с использованием FormBuilder:
    // this.userListControl = this.FormBuilder.group({
    //   users: this.FormBuilder.array([['Bob'], ['Tad'], ['John']])
    // });
  }

  removeUserControl(index) {
    (this.userListControl.controls['users'] as FormArray).removeAt(index);
  }

  addUserControl() {
    (this.userListControl.controls['users'] as FormArray).push(new FormControl(''));
  }



}
