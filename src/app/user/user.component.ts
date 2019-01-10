import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user = 'user';
  public userClass = 'red';
  public userObj = {
    name: 'Tanya',
    lastName: 'Halouchyk'
  };

  constructor() {
    // setTimeout(() => {
    //   this.userClass = 'orange';
    //   setTimeout(() => {
    //     this.userClass = 'yellow';
    //   }, 1000);
    // }, 1000);
  }

  ngOnInit() {
  }

  onClick(colour) {
    this.userClass = colour;
  }

}
