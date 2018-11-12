import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../services/user/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() user: User;
  @Output() userOutput: EventEmitter<User> = new EventEmitter<User>();
  @Input() selected: User;
  constructor() { }

  ngOnInit() {
  }

  sendUser() {
    // console.log('User ' + this.user.name + ' was selected');
    this.userOutput.emit(this.user);
  }

}
