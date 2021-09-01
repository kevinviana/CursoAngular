import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: "John",
    lastName: "Travolta",
    age: 45,
    address: "Route 66"
  }  
  

  constructor() { }

  ngOnInit(): void {
  }

}
