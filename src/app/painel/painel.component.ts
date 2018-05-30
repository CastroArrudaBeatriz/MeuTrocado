import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  closeResult: string;

  controleObservable: Observable<any[]>;
  
  constructor(private modalService: NgbModal , private db: AngularFireDatabase) { }

  ngOnInit() {
    this.controleObservable = this.getControle('/controle/PhFgDvDR8WPGbM4ASAuV');
  }

  
  getControle(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  /*Modal*/

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = ``;
    }, (reason) => {
      this.closeResult = ``;
    });
  }

  private getDismissReason(reason: any): string {
  
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return  ``;
    }
  }

  /*Collapsed*/
  public isCollapsed = true;


  /*variaveis painel*/
  public renda: number = 0; 
  public gasto: number = 0;
  public saldo: number ;
  
  public adicionarGasto(valor: number): void{

    this.gasto = this.gasto +  Number(valor);
    this.saldo = this.renda - this.gasto;

  }

  public adicionarRenda(valor: number): void{

    this.renda = this.renda +  Number(valor);
    this.saldo = this.renda - this.gasto;
  }


}


