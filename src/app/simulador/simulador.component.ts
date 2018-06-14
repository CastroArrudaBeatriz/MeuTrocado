import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {
 
  mesAno: number = 12;

  valorMensal: number;

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;


  constructor() { 
     
  }

  ngOnInit(): void {

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(1800)
    ).subscribe(() => this.successMessage = null);

  }

  public showMessage() {
    this._success.next(`Você deverá juntar aproximadamente ` + Math.round(this.valorMensal) +  ` ao mês!`);
  }


  simular(valor: number , tempo: number , unidade: string){
      
      // se for ano converte para mês
      if(unidade == 'ano'){
        tempo = tempo * this.mesAno;
      }

      this.valorMensal = (valor/tempo);

      this.showMessage();

  }

}
