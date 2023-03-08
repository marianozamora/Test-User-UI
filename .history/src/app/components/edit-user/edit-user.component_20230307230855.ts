import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() user?: User;
  @Output() useresUpdated = new EventEmitter<User[]>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  updateUser(user: User) {
    this.userService
      .updateUser(user)
      .subscribe((users: User[]) => this.useresUpdated.emit(users));
  }

  deleteUser(user: User) {
    this.userService
      .deleteUser(user)
      .subscribe((heroes: User[]) => this.useresUpdated.emit(heroes));
  }

  createUser(user: User) {
    this.userService
      .createUser(user)
      .subscribe((users: User[]) => this.useresUpdated.emit(users));
  }
}
