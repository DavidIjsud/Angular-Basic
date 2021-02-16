import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        ListadoComponent,
        HeroeComponent
    ],
    exports:[
        ListadoComponent,
        HeroeComponent 
    ],
    imports:[
        CommonModule // este hay que averiguar para que lo importa
    ]
})
export class HeroesModule {


}