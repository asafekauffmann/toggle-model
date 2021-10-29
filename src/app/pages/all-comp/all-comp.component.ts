import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-comp',
  templateUrl: './all-comp.component.html',
  styleUrls: ['./all-comp.component.sass']
})
export class AllCompComponent implements OnInit {

   show = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
