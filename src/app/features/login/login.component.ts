import {User, UserService} from './../../services/user/user.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public name: string;
  public currentUser: User = {id: '0', name: "null", firstName: "null", lastName: "null"};

  constructor(private router: Router,
              private user: UserService,
              public snackBar: MatSnackBar) {
  }

  login(user: User) {
    this.currentUser = user;
    this.user.set(user);
    this.navigate();
  }

  showError(error: string) {
    this.snackBar.open(error, null, {duration: 5000});
  }

  private navigate() {
    this.router.navigate(['/chat']);
  }
}
