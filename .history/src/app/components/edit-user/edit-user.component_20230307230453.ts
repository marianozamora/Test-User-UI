import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/user';
import { SuperHeroService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(hero: SuperHero) {
    this.superHeroService
      .updateHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  deleteHero(hero: SuperHero) {
    this.superHeroService
      .deleteHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero: SuperHero) {
    this.superHeroService
      .createHero(hero)
      .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
}
