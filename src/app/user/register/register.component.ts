import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public user: User = {} as User;
  public message: string | undefined;

  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.userService.register(this.user)
      .subscribe({
        next: (resp) => {
          console.log('Successfully registered');
          this.message = resp.msg;
          this.router.navigate(['login']);
        }, error: (err) => {
          console.error('Error registering', err);
          this.message = err.error.msg;
        }
      });
  }
}