import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  areaCovers: Array<string> = [
    'Orlando', 'Celebration', 'Haines City', 'Winter Park',
    'Orlo Vista', 'Pine Hills', 'Maitland', 'Apopka', 'Ocooee',
     'Sanford', 'Longwood', 'Windermere', 'Winter Garde', 'Lake Buena Vista',
    'Lake Mary', 'Winter Springs', 'Kissimmee', 'Casselberry', 'Winter Haven', 'Clermont'];

  repairs: Array<any>;
  error: string;

  constructor() { }

  ngOnInit(): void {
  }

}
