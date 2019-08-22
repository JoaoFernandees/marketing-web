import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste.component';

const routes: Routes = [
    {path: '', component: TesteComponent}
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class TesteRoutingModule {}