import { Component, OnInit } from '@angular/core';

@Component({
  /*as a tag*/
  //selector: 'app-nav',
  /*as an attribute*/
  //selector: '[app-nav]',
  /*as a class*/
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sitename: string = 'eShopping';
}
