import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  dataLoaded:boolean = false;
  dataNotLoaded = true;
  ELEMENT_DATA: any[];

  ngOnInit(){

  }

  // addData(){
  //   this.dataLoaded = true;
  //   this.ELEMENT_DATA = [
  //     {position: 1, name: 'Hydrogen', weight: 1.0079, detail: 'H'},
  //     {position: 2, name: 'Helium', weight: 4.0026, detail: 'He'},
  //     {position: 3, name: 'Lithium', weight: 6.941, detail: 'Li'},
  //     {position: 4, name: 'Beryllium', weight: 9.0122, detail: 'Be'},
  //     {position: 5, name: 'Boron', weight: 10.811, detail: 'B'},
  //     {position: 6, name: 'Carbon', weight: 12.0107, detail: 'C'},
  //     {position: 7, name: 'Nitrogen', weight: 14.0067, detail: 'N'},
  //     {position: 8, name: 'Oxygen', weight: 15.9994, detail: 'O'},
  //     {position: 9, name: 'Fluorine', weight: 18.9984, detail: 'F'},
  //     {position: 10, name: 'Neon', weight: 20.1797, detail: 'Ne'},
  //     {position: 11, name: 'Sodium', weight: 22.9897, detail: 'Na'},
  //     {position: 12, name: 'Magnesium', weight: 24.305, detail: 'Mg'},
  //     {position: 13, name: 'Aluminum', weight: 26.9815, detail: 'Al'},
  //     {position: 14, name: 'Silicon', weight: 28.0855, detail: 'Si'},
  //     {position: 15, name: 'Phosphorus', weight: 30.9738, detail: 'P'},
  //     {position: 16, name: 'Sulfur', weight: 32.065, detail: 'S'},
  //     {position: 17, name: 'Chlorine', weight: 35.453, detail: 'Cl'},
  //     {position: 18, name: 'Argon', weight: 39.948, detail: 'Ar'},
  //     {position: 19, name: 'Potassium', weight: 39.0983, detail: 'K'},
  //     {position: 20, name: 'Calcium', weight: 40.078, detail: 'Ca'},
  //   ];

  //   this.dataNotLoaded = false;
  // }
  
 

}
