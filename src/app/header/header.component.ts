import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userClass = 'red';
  public user = {
    name: 'Tanya',
    lastName: 'Halouchyk'
  };

  public isShown = 'true';
  // public isShown = 'false';

  public users;
  public selectedUser;

  constructor(
    private _userService: UserService) {
  }

  ngOnInit() {
    // this.users = this._userService.getAll().subscribe(users => this.users = users);
    this.users = this._userService.getAll();
  }

  onClick(colour) {
    this.userClass = colour;
  }

  removeUser(name: string) {
    this._userService.remove(name);
    this.users = this._userService.getAll();
  }

  addUser(name: string) {
    if (!name) {
      return;
    }
    this._userService.add(name);
    this.users = this._userService.getAll();
  }

}
