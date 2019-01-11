import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event } from '@angular/router';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => console.log(params));
    // получение событий роутера:
    this.router.events.subscribe((event: Event) => console.log(event));
  }

  ngOnInit() {
  }

}
