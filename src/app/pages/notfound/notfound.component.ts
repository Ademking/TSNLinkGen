import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openFBGroup(): void {
    window.open("https://www.facebook.com/groups/TunisiaSharingNetwork", "_self");
  }

}
