import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  btnName = "My Button";

  i = 0;

  spinnerMode = "determinate";
  spinnerValue = 0;
  btnEnable = true;
  selectDisabled = true;
  selectedOption = "";
  inputName = "";

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  inc() {
    this.i++;
    this.btnName = "It was clicked " + this.i + " times";
    this.spinnerValue = this.i*10;
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    this.spinnerValue = 0;
    this.i = 0;
    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000)
    this.btnName = "It was clicked " + this.i + " times";
  }

  cbChange(event) {
    this.selectDisabled = !event.checked;
  }
  selectionChange(event) {
    console.log(event);
    this.selectedOption = event.value;
  }
  inputEvent(event){
    console.log(event.target.value)
    console.log(this.inputName)
  }
}
