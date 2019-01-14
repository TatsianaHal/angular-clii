import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event } from '@angular/router';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  public user;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _testingService: TestingService
  ) {
    this.route.params.subscribe(params => console.log(params));
    // получение событий роутера:
    this.router.events.subscribe((event: Event) => console.log(event));
  }

  ngOnInit() {
  }

  someMethod() {
    this._testingService.getOne(1).subscribe( user => this.user = user);
  }

}
