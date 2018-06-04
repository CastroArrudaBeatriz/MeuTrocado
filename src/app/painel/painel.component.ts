import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  title = 'Meu Trocado';

  closeResult: string;

  RendaValue = '';
  
  controles: Observable<any[]>;
 
  
  constructor(public db: AngularFireDatabase , private modalService: NgbModal) { 
    this.controles = db.list('controles').valueChanges();
  }
  
  


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
    this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { gasto: this.gasto , saldo: this.saldo });
    
    //this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { renda: 0 , gasto: 0 , saldo: 0 });
  }

  public adicionarRenda(valor: number): void{
    this.renda = this.renda +  Number(valor);
    this.saldo = this.renda - this.gasto;
    this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { renda: this.renda , saldo: this.saldo });
  }




}