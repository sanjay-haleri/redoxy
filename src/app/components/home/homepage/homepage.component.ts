import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  number: number = 5000;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.number+=20;
  }

  remove() {
    if (this.number > 21) this.number-=20;
  }
}
