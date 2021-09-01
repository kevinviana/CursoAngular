import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

   names = [
     "Ana",
     "Jõao",
     "Marco",
     "Polo"
   ];

   cities = [
     {name: "São Paulo", country: "BR"},
     {name: "Miami", country: "US"},
     {name: "Doha", country: "QA"},
     {name: "Gruyères", country: "CH"},
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
