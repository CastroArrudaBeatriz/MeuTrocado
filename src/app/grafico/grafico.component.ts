import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs';

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
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["Jan", "Fev", "Mar", "Abr" , "Mai" ],
          datasets: [{
              label: 'Gastos Mensais',
              data: [2,5,10,1.5,3],
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
