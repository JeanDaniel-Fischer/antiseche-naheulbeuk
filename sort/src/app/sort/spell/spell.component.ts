import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss']
})
export class SpellComponent implements OnInit {

  @Input() public spell: any;

  constructor() { }

  ngOnInit() {
  }

}
