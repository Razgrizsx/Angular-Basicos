import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ["IronMan", "Thor", "Spiderman", "Captain America"] 
  borrado : string = ""

  erase = () => {this.borrado = this.heroes.pop() || ''}
}
