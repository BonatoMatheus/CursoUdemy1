import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Client } from './client.model';
import { generate } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
   
  public id: number;
   public firstName: string;
   public lastName: string;
   public age: number;
   public clients: Client[];


  constructor() 
  {      
    
  }
  ngOnInit() {
    
  }
  
  btnSave() {
    this.clients.push(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age
      }
    )
    this.firstName = "";
    this.lastName = "";
    this.age = 0;
  }
}


