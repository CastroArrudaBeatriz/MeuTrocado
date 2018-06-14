import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { messaging } from 'firebase';
import { element } from 'protractor';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  
  title = 'Meu Trocado';
  
  canvas: any;
  ctx: any;

  meses: Observable<any[]>;

  
  constructor(public db: AngularFireDatabase){
    this.meses = db.list('meses').valueChanges();

  }

  ngAfterViewInit() {
    let arrayMeses = [];
    let arrayGastos = [];
  
    this.meses.forEach(element => {
      
      //iterando observable meses e preenchendo array
      let mes = element.map(a => a.mes).toString();
       arrayMeses = mes.split(",");
       
      let gasto = element.map(a => a.gasto).toString();
       arrayGastos = gasto.split(",");

    //criando grafico   
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: arrayMeses,
          datasets: [{
              label: 'Gastos Mensais',
              data: arrayGastos ,
              backgroundColor: [
                  'rgba(144,238,144, 0.5)',
                  'rgba(144,238,144, 0.5)',
                  'rgba(144,238,144, 0.5)',
                  'rgba(144,238,144, 0.5)',
                  'rgba(144,238,144, 0.5)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    });
      
    });

  }

  ngOnInit() {
  }

  

}
