import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
