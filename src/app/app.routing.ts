import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelComponent } from './painel/painel.component';


const APP_ROUTES: Routes =[
    {path: '', component: PainelComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);