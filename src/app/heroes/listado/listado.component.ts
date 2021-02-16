import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
   public listaHeroes:String[] = ["Spiderman", "Batman", "Hulk"];
   public heroeBorrado: String | undefined = "";
   borrarHeroe():void{
    this.heroeBorrado =  this.listaHeroes.shift() || "";
   }
  
}
