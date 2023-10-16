import { Component, OnInit } from '@angular/core';
import {event, events} from "../../event/event";
import {BrPipe} from "./BrPipe";
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [BrPipe]
})
export class WelcomeComponent implements OnInit {

  eventList: event[] = [];

  pageSize = 10;
  pageCount = events.length;
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    this.eventList = events.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  }

  pageSwitch(page: number){
    this.eventList = events.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

}
