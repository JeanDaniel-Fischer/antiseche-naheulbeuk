import { Component, OnInit } from '@angular/core';
import { SpellBookService } from './spell-book/spell-book.service';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Générateur d\'aide de sort';
  public books: string[];

  constructor(
    private spellBookService: SpellBookService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnInit(): void {
    this.books = this.spellBookService.availableBooks;
  }

  public printPage() {
    window.print();
  }
}
