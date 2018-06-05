import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { PeriodicElement } from '../../app-interface/tableData';

@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css']
})
export class PopupTableComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  @Input('table-data') tableData;
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator: MatPaginator;




  constructor() { }

  ngOnInit() {
    this.dataSource.data= this.tableData;
    this.dataSource.paginator = this.paginator;
  }

  addData(){
    
  }

}


