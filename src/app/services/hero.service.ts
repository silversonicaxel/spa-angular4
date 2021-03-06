import { Injectable } from '@angular/core';
import { Hero } from '../components/hero';
import { HEROES } from '../data/mock-heroes';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroesOld(): Hero[] {
    return HEROES;
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
