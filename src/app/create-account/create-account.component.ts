import {DataService} from '../services/data.service';
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  userID = [];

  constructor(private _data: DataService, private db: AngularFireDatabase, private router: Router) {}

  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
  }

  getProfile(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }

  onSubmit(form: any): void {
    const firebase = this.db.database.ref('users/' + form.username);
    const newUser = [form.username];
    const tempData = this._data;
    const traffic = this.router;

    if (form.username === '') {
      alert('Username required.');
    } else {
      this.db.database.ref('users/').once('value', function(snapshot) {
        if (snapshot.hasChild(form.username)) {
          alert('Username already taken.');
        } else {
          if (form.password !== form.password2 || form.password === '') {
            alert('Passwords do not match.');
          } else {
            firebase.set({
              email: form.email,
              favfoods: form.favoritefoods,
              idUrl: form.urlPic,
              name: form.name,
              password: form.password
            });
            tempData.changeCurrentUser(newUser);
            traffic.navigate(['/']);
          }
        }
      });
    }
  }


}
