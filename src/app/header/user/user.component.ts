import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user;

  constructor() {
    console.log('constructor- user', this.user);
  }

  ngOnInit() {
    console.log('ngOnInit- user', this.user);
  }

}
