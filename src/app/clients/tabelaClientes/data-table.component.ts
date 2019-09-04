import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model';




@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input('clientes')
  set clientes(v) {
    //console.log(v);
    this.dataSource.push(v);
  }

  /*get cliente(){
    return this.clients;
  }*/
    /*@Input() title: string;
  @Output() inc = new EventEmitter<number>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();*/

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age'];
  dataSource: Client[];


  constructor() {

    this.dataSource = [
      { id: 1, firstName: "Lionel", lastName: "Messi", age: 30 },
      { id: 2, firstName: "Cristiano", lastName: "Ronaldo", age: 40 },
      { id: 3, firstName: "Neymar", lastName: "Jr", age: 75 },
      { id: 4, firstName: "Zinedini", lastName: "Zidane", age: 20 }
    ];
  }

  ngOnInit() {
  }

  btnClick(n: number) {
    //this.inc.emit(n);
  }
}
