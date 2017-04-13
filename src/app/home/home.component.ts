import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-home',
  template: '<h1>{{ title1 }}</h1>',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  
 title1:string;
  constructor(private _exampleService: GetdataService) { }

  ngOnInit() {

 this.title1=this._exampleService.expdata();
  }

}
