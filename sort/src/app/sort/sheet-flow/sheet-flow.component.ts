import { Component, OnInit } from '@angular/core';
import { SpellBookService } from '../spell-book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sheet-flow',
  templateUrl: './sheet-flow.component.html',
  styleUrls: ['./sheet-flow.component.scss']
})
export class SheetFlowComponent implements OnInit {
  public noDisplayCast = {
    'no-cast-1': false,
    'no-cast-2': false,
    'no-cast-3': false,
    'no-cast-4': false,
    'no-cast-5': false,
    'no-cast-6': false,
    'no-cast-7': false,
    'no-cast-8': false,
    'no-cast-9': false,
    'no-cast-10': false,
    'no-cast-11': false,
    'no-cast-12': false,
    'no-cast-13': false,
    'no-cast-14': false,
    'no-cast-15': false,
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
