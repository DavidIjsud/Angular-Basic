import { Component } from "@angular/core";

@Component({
    selector:"HeroeComponent",
    templateUrl:"./heroe.component.html"
})
export class HeroeComponent{

     public nombre:String = "Ironman";
     public edad  :Number = 45;

     get obtenerNombreCapitalizado(){
          return this.nombre.toUpperCase();
     }

     obtenerEdad() : Number {
         
         return this.edad;
     }

     cambiarHeroe(): void{
         this.nombre = "Superman";
     }

     cambiarEdad() : void{
          this.edad = 35;
     }

}