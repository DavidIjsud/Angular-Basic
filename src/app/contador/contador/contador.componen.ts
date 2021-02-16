import { Component } from "@angular/core";

@Component({
    selector:"contador-component",
    template:`
    <p>{{ titleComponent  }} </p>

    <h3> La base es : {{ base }} </h3>
    
    <button (click)=" acumular(  base, 'add'  ); " > +1 </button>
    <span> {{ contador }} </span>
    <button (click)= " acumular(  base, 'rest'  ); " > -1 </button>
    
    `
})
export class ContadorComponent {
    public titleComponent : String = "Contador APP";
     public contador : number = 0;
     public base: number = 5;

    /* public sumar():void{
          this.contador++;
     }

     public restar():void{
         this.contador--;
     } */

     public acumular( factor : number, action: String ): void{
      
        if( action == "add" ){
          this.contador += factor;  
        }else{
           this.contador -= factor; 
        }
      
     }
}