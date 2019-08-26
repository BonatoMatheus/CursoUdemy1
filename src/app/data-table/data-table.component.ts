import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Client } from '../clients/client.model';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  @Input('clientes')
    set clientes(v) {
    console.log(v);
    this.dataSource = v;
  }

  @Input() title: string;
  @Output() inc = new EventEmitter<number>();
  /*@Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();*/


  /*get cliente(){
    return this.clients;
  }*/

  displayedColumns: string[] = ['id', 'name', 'lastName', 'age'];
  dataSource: Client[];

  constructor() {
  }

  ngOnInit() {
  }

  btnClick(n: number){
    this.inc.emit(n);
  }
}

