import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = "Superman";
    edad: number = 22;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
        console.log("Nombre cambiado...");
    }

    cambiarEdad(): void {
        this.edad = 199;
        console.log("Edad cambiada...");
    }

}