import {DataService} from '../services/data.service';
import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private _data: DataService, db: AngularFireDatabase) {}

  ngOnInit() {
  }

  onSubmit(form: any): void {
  }

}
