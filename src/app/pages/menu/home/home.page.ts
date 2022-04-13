import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
  }

  getUser()
  {
    console.log(this.auth.getAuth());
  }
}
