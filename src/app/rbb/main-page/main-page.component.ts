import { Component, OnInit } from '@angular/core';

interface Jugador{
  nombre:string,
  posicion:string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

    jugadores: Jugador[] = [
      {
        nombre: 'Guardado',
        posicion: 'Mediocentro'
      },
      {
        nombre: 'Bartra',
        posicion: 'Defensa'
      }
    ]

    nuevo:Jugador = {
      nombre: '',
      posicion: ''
    }

    agregar(nuevo:Jugador){
      if (this.nuevo.nombre.trim().length === 0) { // si está vacío hace un return. Trim quita los espacios en blanco
        return;
      }
      
      this.jugadores.push(this.nuevo)
      
      this.nuevo = {
        nombre: '',
        posicion: ''
      }

    }
  

}
