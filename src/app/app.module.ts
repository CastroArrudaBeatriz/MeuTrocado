import { MaterializeModule } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { RendaComponent } from './renda/renda.component';
import { GastoComponent } from './gasto/gasto.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SonhoComponent } from './sonho/sonho.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    RendaComponent,
    GastoComponent,
    GraficoComponent,
    SonhoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
