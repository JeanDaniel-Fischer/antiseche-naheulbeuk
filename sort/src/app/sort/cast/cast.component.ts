import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  @Input() public level: number;
  @Input() public name: string;
  @Input() public note: string;
  @Input() public test: string;
  @Input() public testControl: string;
  @Input() public material: string;
  @Input() public cost: string;
  @Input() public damage: string;
  @Input() public castingTime: number;
  @Input() public critFail: string;
  @Input() public critSuccess: string;

  constructor() { }

  ngOnInit() {
  }

}
