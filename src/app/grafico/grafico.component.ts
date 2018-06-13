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


  arrayMeses: string[] = [];
  arrayGastos: string[] = [];

  constructor(public db: AngularFireDatabase){
    this.meses = db.list('meses').valueChanges();
  }

  ngAfterViewInit() {
    
    this.meses.forEach(element => {
      let mes: string = element.map(a => a.mes).toString();
      this.arrayMeses.push(mes);
      console.log(this.arrayMeses);
      
      var gasto: string = element.map(a => a.gasto).toString();
      this.arrayGastos.push(gasto);
      console.log(this.arrayGastos);
      

    });
    
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: this.arrayMeses,
          datasets: [{
              label: 'Gastos Mensais',
              data: this.arrayGastos.map(function(item){ return parseFloat(item); }),
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
  }

  ngOnInit() {
  }

  

}
