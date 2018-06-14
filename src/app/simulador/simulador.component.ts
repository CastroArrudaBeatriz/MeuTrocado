import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  simular(valor: number , tempo: number , unidade: string){
      
      console.log(valor);
      console.log(tempo);
      console.log(unidade);
      
  }

}
