import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PainelComponent } from './painel/painel.component';
import { GastoComponent } from './gasto/gasto.component';
import { RendaComponent } from './renda/renda.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SonhoComponent } from './sonho/sonho.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    GastoComponent,
    RendaComponent,
    GraficoComponent,
    SonhoComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
