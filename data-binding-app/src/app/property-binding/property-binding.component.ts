import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string="primary";
  btnDisabled="true";
  colors = ["primary", "accent", "","warn"];
  i=0;

  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      this.i = (this.i+1) % this.colors.length;
    }, 500)
  }

}
