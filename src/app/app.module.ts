import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { RendaComponent } from './renda/renda.component';
import { GastosComponent } from './gastos/gastos.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SonhoComponent } from './sonho/sonho.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    RendaComponent,
    GastosComponent,
    GraficoComponent,
    SonhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
