import { Component, Inject, forwardRef } from '@angular/core';





@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  test(){

    var user=(<HTMLInputElement>document.getElementById('user')).value
    var pass= (<HTMLInputElement>document.getElementById("pass")).value;
    
    alert("Your username is " + user + "\nYour password is " + pass)

  }

  


}
