import {Component, OnInit} from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor() {}
//  constructor(private http: HttpClient) {}

  ngOnInit() {
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
