import { Component } from '@angular/core' 


@Component({
    selector:'app-contador',
    template:`

        <h1>{{title}}</h1>
        <h2>{{contador}}</h2>
        <h3>Base: {{base}}</h3>
        <button (click)="add(base)">+{{base}}</button>
        <button (click)="sub(base)">-{{base}}</button>
    
    `
})
export class ContadorComponent{
    title: string = 'Contador App';
    contador: number = 0
    base: number = 5
    add = (value:number) => {this.contador += value}
    sub = (value:number) => {this.contador -= value}
}