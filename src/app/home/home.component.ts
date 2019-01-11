import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goToUser(userId) {
    this._router.navigate(['users', userId]);
    // или так (аналогично):
    // this._router.navigateByUrl('users/' + userId);
  }

}
