import { AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PeriodicElement } from '../app-interface/tableData';
import { TableDataService } from '../services/table-data.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PopupTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['position', 'name', 'detail'];
  @Input()
  url:string;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  data = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _tableService:TableDataService) { }

  ngOnInit() {
    
    if (!this.url || this.url.length === 0) {
      console.error(`url attribute must be provided!`);
    }else{
      
      // If the user changes the sort order, reset back to the first page.
      // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge()
      .pipe(
        startWith({}),
        switchMap(()=>{
          this.isLoadingResults = true;
          return this._tableService.getGeoFeatureProperty(this.url);
        }),
        map(data =>{
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(()=>{
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.data.data = data
        this.data.paginator = this.paginator;
      });

    }
    
  }

  ngAfterViewInit(): void {

  }

  
  // public sourceData() : PeriodicElement[] {

  //   const result:PeriodicElement[]= [];

  //   const fieldFilter: FieldSorter[]= [
  //     {_id: "ESTATE", fieldName: "ESTATE NAME"},
  //     {_id: "BLOCK_ID", fieldName: "BLOCK ID"},
  //     {_id: "Ex_PLOT_NO", fieldName: "EXCESS PLOT"},
  //     {_id: "STREET_NAM", fieldName: "STREET NAME"},
  //     {_id: "ADDRESS", fieldName: "ADDRESS"},
  //     {_id: "EX_SIZE", fieldName: "EXCESS AREA TAKEN"},
  //     {_id: "ADM_CHARGE", fieldName: "ADMINISTRATIVE CHARGES"},
  //     {_id: "ANN_GRent", fieldName: "ANNUAL GROUND RENT"},
  //     {_id: "CAP_CONB", fieldName: "CAPITAL CONTRIBUTION"},
  //     {_id: "LandCharge", fieldName: "LAND CHARGES"},
  //     {_id: "NOR_PREMIU", fieldName: "NORMAL PREMIUM"},
  //     {_id: "RATE_PSqM", fieldName: "RATE PER SQ. METERS"},
  //     {_id: "STAMP_DUTY", fieldName: "STAMP DUTY "},
  //     {_id: "RegConvFee", fieldName: "REGISTRATION FEE "},
  //     {_id: "SURVEY_FEE", fieldName: " SURVEY FEE "},
  //     {_id: "AMT_PAYABL", fieldName: " AMOUNT PAYABLE  "},
  //     {_id: "DELIV_STAT", fieldName: " DELIVERY STATUS  "},
  //     {_id: "REMARK", fieldName: " REMARK "}
  //   ]

  //   let source;

  //   this._tableService.getGeoFeatureProperty(this.url).subscribe(res=>{
  //     source = res;
  //     console.log(source);


      
  //   })
  //   return result;
  // }



  sortData4Popup(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        
      },200)
    })
  }
  
}






const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen',weight: 4.005, detail: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, detail: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, detail: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, detail: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, detail: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, detail: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, detail: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, detail: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, detail: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, detail: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, detail: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, detail: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, detail: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, detail: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, detail: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, detail: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, detail: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, detail: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, detail: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, detail: 'Ca'},
];
