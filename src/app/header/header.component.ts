import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public userClass = 'red';
  public user = {
    name: 'Tanya',
    lastName: 'Halouchyk'
  };

  public isShown = 'true';
  // public isShown = 'false';

  public users;
  public selectedUser;

    // should perform only local variable initialization
  constructor(
    private _userService: UserService
  ) {
    console.log('constructor works');
  }

  // вызывается при начальной установке свойств, которые связаны с механизмом привязки +
  // при любой их переустановке или изменении
  public ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges works, changes:', changes);
  }

    // вызывается один раз после установки свойств компонента
  public ngOnInit() {
    console.log('OnInit works');
    // this.users = this._userService.getAll().subscribe(users => this.users = users);
    this.users = this._userService.getAll();
  }

  // вызывается при каждлй проверке изменений свойств компонента сразу после ngOnChanges и ngOnInit
  public ngDoCheck() {
    console.log('DoCheck works');
  }

  // вызывается один раз после ngDoCheck() после вставки содержимого в представление компонента
  public ngAfterContentInit() {
    console.log('AfterContentInit works');
  }

  // вызывается фреймворком Angular при проверке изменений содержимого, которое добавляется в представление компонент
  public ngAfterContentChecked() {
    console.log('AfterContentChecked works');
  }

  // вызывается фреймворком Angular после инициализации представления компонента, а также представлений дочерних компонентов
  public ngAfterViewInit() {
    console.log('AfterViewInit works');
  }

  // вызывается фреймворком Angular после проверки на изменения в представлении компонента,
  // а также проверки представлений дочерних компонентов
  public ngAfterViewChecked() {
    console.log('AfterViewChecked works');
  }

  // вызывается перед тем, как фреймворк Angular удалит компонент
  public ngOnDestroy() {
    console.log('OnDestroy works');
  }

  public onClick(colour) {
    this.userClass = colour;
  }

  public removeUser(name: string) {
    this._userService.remove(name);
    this.users = this._userService.getAll();
  }

  public addUser(name: string) {
    if (!name) {
      return;
    }
    this._userService.add(name);
    this.users = this._userService.getAll();
  }

}
