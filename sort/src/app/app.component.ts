import { Component, OnInit } from '@angular/core';
import { SpellBookService } from './sort/spell-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Générateur d\'aide de sort';
  public books: string[];

  constructor(
    private spellBookService: SpellBookService
  ) {}

  ngOnInit(): void {
    this.books = this.spellBookService.availableBooks;
  }

  public printPage() {
    window.print();
  }
}
