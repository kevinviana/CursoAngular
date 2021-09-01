import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title:string="Título";
  value: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  incBy(event:number) {
    this.value+=event;
  }

}
