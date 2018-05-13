import {DataService} from '../services/data.service';
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private _data: DataService, private db: AngularFireDatabase) {}

  ngOnInit() {
  }

  onSubmit(form: any): void {
    this.db.database.ref('users/' + form.username).set({
      email: form.email,
      favfoods: form.favoritefoods,
      idUrl: form.urlPic,
      name: form.name,
      password: form.password
    });
  }


}
