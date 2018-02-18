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

  constructor(private router: Router,
              private user: UserService,
              public snackBar: MatSnackBar) {
  }

  login(user: User) {
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
