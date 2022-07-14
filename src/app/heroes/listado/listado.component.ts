import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Capitán América'];
  
    ultimoHeroeBorrado: string= "";

    borrarHeroe(): void{
      console.log("Borrando Héroe...")
      const heroeBorrado = this.heroes.shift();
      console.log(heroeBorrado);
      //this.ultimoHeroeBorrado = heroeBorrado + '';
      this.ultimoHeroeBorrado = heroeBorrado || '';
    }

}
