import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => console.log('params:', params));
    this.route.data.subscribe(data => console.log('data:', data));
  }

  ngOnInit() {
  }

}
