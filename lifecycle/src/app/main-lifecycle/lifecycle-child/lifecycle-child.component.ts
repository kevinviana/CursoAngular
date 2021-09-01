import { AfterViewInit, SimpleChanges } from '@angular/core';
import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() food: string;

  public events: LifeCycleEvent[] = [];
  nextEventId: number = 0;

  colors: string[] = ["accent", "warn", "primary"]


  constructor() {
    this.newEvent("constructor");
  }

  ngOnInit() {
    this.newEvent("ngOnInit");
  }

  ngOnDestroy() {

    this.newEvent("ngOnDestroy");

  }
  ngOnChanges(changes: SimpleChanges) {

    this.newEvent("ngOnChanges");
  }
  ngAfterContentInit() {

    this.newEvent("ngAfterContentInit");
  }
  ngAfterViewInit() {

    this.newEvent("ngAfterViewInit");
  }
  newEvent(name) {
    let id = this.nextEventId++;
    this.events.push({ id: id, color: this.colors[id % this.colors.length], name: name })

    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id == id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3333 + this.events.length * 2222)
  }
}
