import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

  @Input() nuevo : Personaje = 
   {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService){}

  //@Output() onNewCharacter : EventEmitter<Personaje> = new EventEmitter()

  handleSubmit = () => {
    this.dbzService.addChar(this.nuevo)
    //this.onNewCharacter.emit(this.nuevo)
    this.nuevo = {
      name: '',
      power: 0
    }
  }
}
