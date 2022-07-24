import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-card',
  templateUrl: './repair-card.component.html',
  styleUrls: ['./repair-card.component.css'],
})
export class RepairCardComponent implements OnInit {
  @Input('repair') repair:any;

  constructor() {}

  ngOnInit(): void {

  }


}
