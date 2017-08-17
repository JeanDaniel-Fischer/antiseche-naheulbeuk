import { Component, OnInit } from '@angular/core';
import { SpellBookService } from '../spell-book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  public noDisplaySpell = {
    'no-spell-1': false,
    'no-spell-2': false,
    'no-spell-3': false,
    'no-spell-4': false,
    'no-spell-5': false,
    'no-spell-6': false,
    'no-spell-7': false,
    'no-spell-8': false,
    'no-spell-9': false,
    'no-spell-10': false,
    'no-spell-11': false,
    'no-spell-12': false,
    'no-spell-13': false,
    'no-spell-14': false,
    'no-spell-15': false
  };
  public caption = false;

  public attackSpell: any[];
  public supportSpell: any[];
  public utilitySpell: any[];

  public book: string;

  constructor(
    private spellBookService: SpellBookService,
    route: ActivatedRoute
  ) {
    this.book = route.snapshot.params['book'];
  }

  ngOnInit() {
    this.spellBookService.GetSpellBook(this.book).subscribe(
      (book) => {
        this.attackSpell = book.GetSpellsByCategory('attack');
        this.supportSpell = book.GetSpellsByCategory('support');
        this.utilitySpell = book.GetSpellsByCategory('utility');
      }
    );
  }

}
