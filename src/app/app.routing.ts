import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { GastoComponent } from './gasto/gasto.component';
import { RendaComponent } from './renda/renda.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SonhoComponent } from './sonho/sonho.component';


const APP_ROUTES: Routes =[
    {path: 'gasto', component: GastoComponent},
    {path: 'grafico', component: GraficoComponent},
    {path: '', component: PainelComponent},
    {path: 'renda', component: RendaComponent},
    {path: 'sonho', component: SonhoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);