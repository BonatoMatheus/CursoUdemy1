import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent, CalculadoraService } from './calculadora';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataTableComponent } from './data-table/data-table.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { ClientsComponent } from './clients/clients.component';





@NgModule({
  declarations: [
    AppComponent, CalculadoraComponent, CardComponent, DataTableComponent, ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatIconModule
   ],

  providers: [
    CalculadoraService,
    {provide: 'iCalculadoraService', useClass: CalculadoraService} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
