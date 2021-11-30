import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'stream';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  
  @Input() nuevo:Personaje ={
    nombre:'',
    poder:0
  }
  constructor (private dbzService: DbzService){}

  //@Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter();

 agregar() {
   if(this.nuevo.nombre.trim().length===0){ return;}
   
   //this.onNuevoPersonaje.emit(this.nuevo)
   this.dbzService.agregarPersonaje (this.nuevo); //de produccion
   

   this.nuevo={ 
     nombre:'',
     poder:0
   }

 }

}