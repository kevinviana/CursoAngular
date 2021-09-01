import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login:"bob", role:"admin", lastLogin: new Date("3/2/2019")},
    {login:"lia", role:"user", lastLogin: new Date("2/30/2019")},
    {login:"john", role:"admin", lastLogin: new Date("3/12/2019")},
    {login:"robin", role:"user", lastLogin: new Date("2/22/2019")}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
