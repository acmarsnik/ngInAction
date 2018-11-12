import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = { name: "" };
  subscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.user().subscribe(user => this.user = user);
  }

  public selectProfile(user: User) {
    this.user = user;
  }
}
