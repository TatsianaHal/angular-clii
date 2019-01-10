import { Component, OnInit } from '@angular/core';

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

  public users = [
    {name: 'Dasha'},
    {name: 'Slava'},
    {name: 'Katya'}
  ];
  public selectedUser;

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
