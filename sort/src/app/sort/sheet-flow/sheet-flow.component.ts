import { Component, OnInit } from '@angular/core';
import { AdathieService } from '../adathie.service';

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
  constructor(
    private adathieService: AdathieService
  ) { }

  ngOnInit() {
    this.spells = this.adathieService.GetAttack()
      .concat(this.adathieService.GetSupport())
      .concat(this.adathieService.GetUtility())
      .sort((a: any, b: any) => {
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
