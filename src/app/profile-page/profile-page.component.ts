import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import {DataService} from '../services/data.service';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user = {
    name: null,
    email: null,
    favFoods: null,
    idUrl: null,
    password: null
  }
  
  userID = [];
  
  constructor(private db: AngularFireDatabase, private _data: DataService) { }
  
  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
    
    this.getProfile('/users/' + this.userID[0]).subscribe( x => {
      this.user.name = x.name
      this.user.email = x.email
      this.user.favFoods = x.favfoods
      this.user.idUrl = x.idUrl
      this.user.password = x.password
    })
  }
  getProfile(listPath): Observable<any> {
    return this.db.object(listPath).valueChanges();
  }
}