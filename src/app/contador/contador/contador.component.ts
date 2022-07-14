import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
  
      <h1>HOLA MUNDO</h1>
      <h2>{{titulo}}</h2>
      <h4>La base es: {{base}}</h4>
      
      <button (click)="acumular(base)">+{{base}}</button> 
      <h2>{{ numero }}</h2>
      <button (click)="acumular(-base)">-{{base}}</button> 
  
  `
})

export class ContadorComponent {
 
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    acumular(valor:number){
      this.numero += valor;
    }

}
