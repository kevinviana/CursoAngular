import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2 {
  text:string="Service 2"
  constructor() {
    console.log("service 2 constr.")
   }
}
