import { Component, OnInit } from '@angular/core';
import { SpellBookService } from '../spell-book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet-flow',
  templateUrl: './sheet-flow.component.html',
  styleUrls: ['./sheet-flow.component.scss']
})
export class SheetFlowComponent implements OnInit {
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
    'no-spell-15': false,
    'no-attack': false,
    'no-support': false,
    'no-utility': false
  };
  public caption = false;
  public spells: any[];
  public categories: any[];
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
        this.spells = book.GetAllSortByLevel();
        this.categories = book.GetCategories();
      }
    );
  }

}
