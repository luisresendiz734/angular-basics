import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        // las declaraciones de los componentes en el modulo
        HeroComponent,
        ListComponent,
    ],
    exports: [
        // los componentes que quiero compartir en toda la app
        HeroComponent,
        ListComponent,
    ],
    imports: [CommonModule],
})
export class HeroesModule {}
