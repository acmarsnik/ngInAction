import { MOCK_USERS } from './../../services/user/user.mock';
import {UserService, User} from './../../services/user/user.service';
import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() select: EventEmitter<User> = new EventEmitter<User>();
  private selected: User;

  public users: User[];

  constructor() {
    this.users = MOCK_USERS;
  }

  ngOnInit() {
  }

  toggleUser(user: User) {
    let newUser = user;
    if (this.selected && this.selected.name === user.name) {
      newUser = null;
    }
    this.select.emit(newUser);
    this.selected = newUser;
  }
}
