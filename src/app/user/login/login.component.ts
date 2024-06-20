import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user: User = {} as User;
  public message: string | undefined;

  @Output() userLoggedIn: EventEmitter<void>;

  constructor(private userService: UserService, private router: Router) {
    this.userLoggedIn = new EventEmitter<void>();
  }

  login() {
    this.userService.login(this.user)
      .subscribe({
        next: (resp) => {
          console.log('Successfully logged in');
          this.userLoggedIn.emit();
          this.message = resp.msg;
          this.router.navigate(['vets/list']);
        },
        error: (err) => {
          console.error('Error logging in', err);
          if (err.status === 401) {
            this.message = 'Invalid username or password. Please try again.';
          } else {
            this.message = 'An error occurred. Please try again later.';
          }
        }
      });
  }
  
}