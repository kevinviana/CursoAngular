import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client!: Client;
  @Output() editClient = new EventEmitter<Client>();
  @Output() deleteClient = new EventEmitter<any>();

  onEdit: boolean = false;
  name!: string;
  age!: number;

  constructor() { }

  ngOnInit(): void {
  }
  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
  delete() {
    this.deleteClient.emit();
  }
  save() {
    this.onEdit = false;
    this.editClient.emit({ name: this.name, age: this.age });
  }

}
