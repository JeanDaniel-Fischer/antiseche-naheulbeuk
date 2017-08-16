import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/rx';

export class Spell {
    level: number;
    category: string;
    name: string;
    castingTime: number;
    cost: string;
    material: string;
    damage: string;
    note: string;
    test: string;
    critFail: string;
    critSuccess: string;
}

export class SpellBook {
    spells: Map<string, Spell[]>;

    constructor(data: Spell[]) {
        this.spells = new Map<string, Spell[]>();
        data.forEach((spell, index) => {
            if (!this.spells.has(spell.category)) {
                this.spells.set(spell.category, []);
            }
            this.spells.get(spell.category).push(spell);
        });
    }

    GetSpellsByCategory(category: string): Spell[] {
        return this.spells.get(category);
    }

    GetCategories(): string[]  {
        return Array.from(this.spells.keys());
    }

    GetAllSortByLevel(): Spell[] {
      let res = [];
      const iterator = this.spells.values();
      let spell = iterator.next();
      while (!spell.done) {
        res = res.concat(spell.value);
        spell = iterator.next();
      }
      return res.sort((a: any, b: any) => {
        if (a.level < b.level) {
          return -1;
        } else if (a.level > b.level) {
          return 1;
        } else {
          return 0;
        }
      });
    }
}

@Injectable()
export class SpellBookService {
  availableBooks = [ 'adathie' ];
  books = new Map<string, Subject<SpellBook>>();

  constructor(
    private http: Http
  ) { }

  GetSpellBook(book: string): Observable<SpellBook> {
    if (this.books.has(book)) {
      return this.books.get(book);
    } else {
      this.books.set(book, new BehaviorSubject(new SpellBook([])));
      // subscribe to the json by http
      this.http.get('assets/' + book + '.json').subscribe(
        (value) => {
          this.books.get(book).next(new SpellBook(value.json().spells));
        },
        (err) => {
          console.log('An error occured for spell book ' + book);
        }
      );
      return this.books.get(book);
    }
  }
}
