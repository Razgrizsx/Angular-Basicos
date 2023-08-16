import {Injectable} from '@angular/core'
import { Personaje } from '../interfaces/dbz.interfaces'

@Injectable()
export class DbzService{

    private _personajes : Personaje[] = [
        {
          name: "Goku",
          power: 15000
        },
        {
          name: "Vegeta",
          power: 14000
        },
        {
          name: 'Trunks',
          power: 14000
        }
      ]

      get personajes() {
        return [...this._personajes] //array copia, no de angular, buena practica
      }

    constructor(){
        console.log("Servicio")
    }

    addChar = (personaje : Personaje) => {
        this._personajes.push(personaje)
      }
      
}