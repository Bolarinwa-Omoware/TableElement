import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../app-interface/tableData';
import { TableDataService } from '../services/table-data.service';


@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PopupTableComponent implements OnInit {

  displayedColumns = ['position', 'name', 'detail'];
  @Input()
  url:string;

  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;




  constructor(private _tableService:TableDataService) { }

  ngOnInit() {
    if (!this.url || this.url.length === 0) {
      console.error(`url attribute must be provided!`);
    }else{


      this.dataSource.paginator = this.paginator;

    }
  }

  
  public get sourceData() : PeriodicElement[] {

    const fieldFilter: FieldSorter[]= [
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "BLOCK_ID", fieldName: "BLOCK ID"},
      {_id: "Ex_PLOT_NO", fieldName: "EXCESS PLOT"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"},
      {_id: "ESTATE", fieldName: "ESTATE NAME"}
    ]

    this._tableService.getGeoFeatureProperty(this.url).subscribe(res=>{
      console.log(res);
      
      // this.dataSource.data= res;
    })
    return 
  }
  
}

export interface FieldSorter{
  _id: string;
  fieldName: string;
}


