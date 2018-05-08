import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
//import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private _data: DataService) {}
//  constructor(private http: HttpClient) {}

  userID = [];
  
  ngOnInit() {
    this._data.currentUser.subscribe(res => this.userID = res);
    this._data.changeCurrentUser(this.userID);
  }

//  onSubmit(e) {
//    e.preventDefault();
//
//    const opts = {
//      headers: new HttpHeaders({
//        'Authorization': 'Bearer YELP_API_TOKEN_HERE'
//      })
//    };
//
//    this.http.get('YELP_URL', opts).subscribe(
//      res => console.log(res)
//    );
//
//  }
  

}
