import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  foods: string[] = ["rice", "beans", "pizza"];
  clients: Client[] = [];
  name: string;
  age: number;
  food: string;
  private onEditClient: number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.onEditClient == -1) {
      this.clients.push({ name: this.name, age: this.age, food: this.food })
    } else {
      this.clients[this.onEditClient].name = this.name;
      this.clients[this.onEditClient].age = this.age;
      this.clients[this.onEditClient].food = this.food;

      this.onEditClient = -1;
    }

    this.name = null;
    this.age = null;
    this.food = null;
  }
  delete(i: number) {
    this.clients.splice(i, 1);
  }
  edit(i: number) {
    this.name = this.clients[i].name;
    this.age = this.clients[i].age;
    this.food = this.clients[i].food;

    this.onEditClient = i;
  }

}
