import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
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
  constructor(private db: AngularFireDatabase) { }
  ngOnInit() {
    this.getProfile('/users/' + 'Admin').subscribe( x => {
      console.log(x)
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