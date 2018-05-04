import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {}

  apiSpace: string = "<b>Some html.</b>";
  
  ngOnInit() {
  }

  
  
  onSubmit(e) {
    event.preventDefault();
    this.apiSpace = "<table style='width:100%'><tr><th>Example Data</th><th>Example Text</th></tr><tr><td>Data</td><td>Text</td></tr></table>";
  }
  
  
}
