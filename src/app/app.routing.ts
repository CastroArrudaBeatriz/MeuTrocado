import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SimuladorComponent } from './simulador/simulador.component';


const APP_ROUTES: Routes =[
    {path: '', component: PainelComponent},
    {path: 'grafico', component: GraficoComponent},
    {path: 'simulador', component: SimuladorComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);