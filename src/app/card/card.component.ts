import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../clients/client.model';

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
  public title: string = "Teste output";



  i = 0;

  @Input() public teste: string;
  @Input() public TESTEGRANDE: string;
  @Input() public age: number;
  public clients: Client[];

  public value: number = 0;

  /*client = {
     firstName: "matheus",
     lastName: "Bonato",
     address: "",
     //age: 0
   };*/


  constructor() {
      
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

  //Outputs
  incBy(event){
    console.log(event);
    this.value += event;
  }
}

