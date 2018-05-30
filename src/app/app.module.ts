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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
