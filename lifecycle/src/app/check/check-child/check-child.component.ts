import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-check-child',
  templateUrl: './check-child.component.html',
  styleUrls: ['./check-child.component.css']
})
export class CheckChildComponent implements OnInit {

  constructor() { 
    console.log("CheckChild: constructor");
  }

  ngOnInit(): void {
    console.log("CheckChild: ngOnInit");    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("CheckChild: ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("CheckChild: ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("CheckChild: ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("CheckChild: ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("CheckChild: ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("CheckChild: ngAfterViewChecked");
  }

}
