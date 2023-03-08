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
  heroes: User[] = [];
  heroToEdit?: User;

  constructor(private UserService: UserService) {}

  ngOnInit(): void {
    this.UserService
      .getUseres()
      .subscribe((result: User[]) => (this.heroes = result));
  }

  updateHeroList(heroes: User[]) {
    this.heroes = heroes;
  }

  initNewHero() {
    this.heroToEdit = new User();
  }

  editHero(hero: User) {
    this.heroToEdit = hero;
  }
}
