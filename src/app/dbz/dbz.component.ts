import { Component } from '@angular/core';
import { DbzService } from './services/dbz.service';

interface Personaje{
    name: string,
    power: number
}

@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html'
})
export class DbzComponent {

  nuevo : Personaje = {
    name: "Maestro Roshi",
    power: 1000
  }

  constructor(){
    
  }
}
