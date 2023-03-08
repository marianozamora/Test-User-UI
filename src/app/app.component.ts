import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User.UI';
  users: User[] = [];
  userToEdit?: User;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService
      .getUsers()
      .subscribe((result: User[]) => (this.users = result));
  }

  updateUserList(users: User[]) {
    this.users = users;
  }

  initNewUser() {
    this.userToEdit = new User();
  }

  editUser(user: User) {
    this.userToEdit = user;
  }
}
