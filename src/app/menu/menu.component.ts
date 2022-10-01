import { Component, OnInit } from '@angular/core';
import {faCalculator, faHouse, faTicket} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  myIcon=faHouse;
  myIcon2=faTicket;
  myIcon3=faCalculator;

  constructor() { }

  ngOnInit(): void {
  }

}
