import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dataLoaded:boolean = false;
  dataNotLoaded = true;
  ELEMENT_DATA: any[];

  content= null;

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(){
    this.content = this.sanitizer.bypassSecurityTrustHtml(`<popup-table url="5b1010a0016a1616c06500bd/features/5b1010a0016a1616c06501a2/properties"></popup-table>`)
  }
 

}
