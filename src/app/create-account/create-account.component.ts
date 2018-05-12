import { DataService } from '../services/data.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private _data: DataService) {}

  ngOnInit() {

  }

}
