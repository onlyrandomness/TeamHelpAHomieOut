import {DataService} from '../services/data.service';
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private _data: DataService, private db: AngularFireDatabase) {}

  ngOnInit() {
  }
  
 writeUserData() {
  this.db.database.ref('users/' + 'newGuy').set({
    email: 'guy@new.nu',
    favfoods: 'new foods',
    idUrl: 'http://www.imagekit.com/i/new_img42e.png',
    name: 'Guy New',
    password: 'newbie'
  });
}


}
