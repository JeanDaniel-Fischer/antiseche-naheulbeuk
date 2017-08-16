import { Component, OnInit } from '@angular/core';
import { SpellBookService } from '../spell-book.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
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
    'no-cast-15': false
  };
  public caption = false;

  public attackSpell: any[];
  public supportSpell: any[];
  public utilitySpell: any[];

  constructor(
    private spellBookService: SpellBookService
  ) { }

  ngOnInit() {
    this.spellBookService.GetSpellBook('adathie').subscribe(
      (book) => {
        this.attackSpell = book.GetSpellsByCategory('attack');
        this.supportSpell = book.GetSpellsByCategory('support');
        this.utilitySpell = book.GetSpellsByCategory('utility');
      }
    );
  }

}
