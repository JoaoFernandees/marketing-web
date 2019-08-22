import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { PoModule } from '@portinari/portinari-ui';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        PoModule,
        CommonModule,
        FormsModule,
        RouterModule,
        HomeRoutingModule
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}
