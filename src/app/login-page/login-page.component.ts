import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userID = [];

  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
  }

  onSubmit(e) {
    e.preventDefault();
    //Login SubmitButton
  }

}
