import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private userID = new BehaviorSubject<any>([' Please Login']);
  currentUser = this.userID.asObservable();

  constructor() {}

  changeCurrentUser(currentUser) {
    this.userID.next(currentUser)
  }

}