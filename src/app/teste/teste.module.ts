import { NgModule } from "@angular/core";
import { TesteComponent } from "./teste.component";
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TesteRoutingModule } from './teste-routing.module';

@NgModule({
    declarations: [
        TesteComponent
    ],
    imports: [
        PoModule,
        CommonModule,
        FormsModule,
        RouterModule,
        TesteRoutingModule
    ],
    exports: [
        TesteComponent
    ]
})

export class TesteModule {}