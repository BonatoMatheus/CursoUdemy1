import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  //public id: number;
  public name: string;
  public lastName: string;
  public age: number;

  public clients: Client[] = [];


  constructor() {

    /*this.clients = [
      { id: 1, name: "Lionel", lastName: "Messi", age: 30 },
      { id: 2, name: "Cristiano", lastName: "Ronaldo", age: 40 },
      { id: 3, name: "Neymar", lastName: "Jr", age: 75 },
      { id: 4, name: "Zinedini", lastName: "Zidane", age: 20 }
    ];*/

   }

  ngOnInit() {
  }

  save(){
    this.clients.push(
    { name: this.name, lastName: this.lastName, age: this.age}
    
    );
      this.name = "";
      this.lastName = "";
      this.age = 0;

  }
}
