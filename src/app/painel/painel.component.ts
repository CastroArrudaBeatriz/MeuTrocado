import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
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


