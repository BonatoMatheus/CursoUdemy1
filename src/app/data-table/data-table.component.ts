import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Client } from '../card/client.model';

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

  /*get cliente(){
    return this.clients;
  }*/

  displayedColumns: string[] = ['id', 'name', 'lastName', 'age'];
  dataSource: Client[];

  constructor() {
  }

  ngOnInit() {
  }
}

