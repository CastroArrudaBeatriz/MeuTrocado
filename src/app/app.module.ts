import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { environment } from '../environments/environment';
import { routing } from './app.routing';

import { PainelComponent } from './painel/painel.component';
import { GraficoComponent } from './grafico/grafico.component';
import { SimuladorComponent } from './simulador/simulador.component';
import { NavbarComponent } from './navbar/navbar.component';

 


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    GraficoComponent,
    SimuladorComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
