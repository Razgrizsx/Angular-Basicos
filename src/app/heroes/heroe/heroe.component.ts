import { Component } from "@angular/core";


@Component({
    selector:'app-heroes',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    name: string = "IronMan"
    age: number = 45
    get upperCaseName(){
        return this.name.toUpperCase()
    }
    getName = ():string => {return `${this.name} - ${this.age}`}  

    changeName = () :void => {this.name = this.name === 'IronMan' ? 'SpiderMan' : "IronMan"}
    changeAge = () :void => {this.age = this.age === 45 ? 20 : 45}
}