import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {

  @Input() public spell: any;

  constructor() { }

  ngOnInit() {
  }

}
