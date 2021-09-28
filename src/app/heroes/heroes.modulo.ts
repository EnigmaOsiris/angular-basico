import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from '../heroe/listado/listado.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        
    HeroeComponent,
    ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],

    imports: [
        CommonModule
    ]
    

})

export class HeroesModule{}