import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public color: string = 'warn';
  public colors = ['primary', 'accent"', 'warn'];
  public BtnDisabled: boolean = false;
  public incluir = 'Incluir';
  public compartilhar = 'Compartilhar';
  public selectDisabled: boolean = false;
  public inputName = "Ney";
  public name1: string = "";



  i = 0;

  @Input() public teste: string;
  @Input() public TESTEGRANDE: string;
  @Input() public age: number;

  public clients: Client[];

  /*client = {
     firstName: "matheus",
     lastName: "Bonato",
     address: "",
     //age: 0
   };*/


  constructor() {
      this.clients = [
      { id: 1, name: "Lionel", lastName: "Messi", age: 30 },
      { id: 2, name: "Cristiano", lastName: "Ronaldo", age: 40 },
      { id: 3, name: "Neymar", lastName: "Jr", age: 75 },
      { id: 4, name: "Zinedini", lastName: "Zidane", age: 20 }
    ];

  }

  ngOnInit() {
    //muda a cor do botão de acordo com a função e o tempo definido definido.
    setInterval(() => {
      this.i = (this.i + 1) % this.colors.length;
    }, 500);
  }

  save() {
    console.log("click");
  }

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectonChange(event) {
    console.log(event);
  }
  inputEvent(event) {
    console.log(event.target.value);
  }
}

