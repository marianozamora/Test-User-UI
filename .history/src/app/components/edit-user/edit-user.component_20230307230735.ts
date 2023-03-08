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

  updateHero(user: User) {
    this.userService
      .updateHero(user)
      .subscribe((users: User[]) => this.heroesUpdated.emit(heroes));
  }

  deleteUser(hero: User) {
    this.userService
      .deleteUser(user)
      .subscribe((heroes: User[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero: User) {
    this.userService
      .createHero(hero)
      .subscribe((heroes: User[]) => this.heroesUpdated.emit(heroes));
  }
}
