import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  displayedColumns = ['select', 'position', 'name', 'cname'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
public first = true;
public second = false;
  // click event
  onclick1() {
this.first = !this.first;
}
onclick2() {
  this.second = !this.second;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
  selectRow(row) {
    console.log(row);
  }
  constructor() { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

export interface Element {
  name: string;
  position: number;
  cname: string;
  symbol: string;
}
const ELEMENT_DATA: Element[] = [
  {position: 2, name: 'Helium', cname: 'Maxo', symbol: 'He'},
  {position: 1, name: 'Hydrogen', cname: 'Maxo', symbol: 'H'},
  {position: 3, name: 'Lithium',  cname: 'Maxo', symbol: 'Li'},
  {position: 4, name: 'Beryllium', cname: 'Maxo', symbol: 'Be'},
  {position: 5, name: 'Boron',  cname: 'Maxo', symbol: 'B'},
  {position: 6, name: 'Carbon', cname: 'Maxo', symbol: 'C'},
  {position: 7, name: 'Nitrogen', cname: 'Maxo', symbol: 'N'},
  {position: 8, name: 'Oxygen', cname: 'Maxo', symbol: 'O'},
  {position: 9, name: 'Fluorine', cname: 'Maxo', symbol: 'F'},
  {position: 10, name: 'Neon', cname: 'Maxo', symbol: 'Ne'},
  {position: 11, name: 'Sodium', cname: 'Maxo', symbol: 'Na'},
  {position: 12, name: 'Magnesium', cname: 'Maxo', symbol: 'Mg'},
  {position: 13, name: 'Aluminum', cname: 'Maxo', symbol: 'Al'},
  {position: 14, name: 'Silicon', cname: 'Maxo', symbol: 'Si'},
  {position: 15, name: 'Phosphorus', cname: 'Maxo', symbol: 'P'},
  {position: 16, name: 'Sulfur',  cname: 'Maxo', symbol: 'S'},
  {position: 17, name: 'Chlorine', cname: 'Maxo', symbol: 'Cl'},
  {position: 18, name: 'Argon', cname: 'Maxo', symbol: 'Ar'},
  {position: 19, name: 'Potassium', cname: 'Maxo', symbol: 'K'},
  {position: 20, name: 'Calcium', cname: 'Maxo', symbol: 'Ca'},
];
