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
  closeResultNovoMes: string;

  RendaValue = '';
  
  controles: Observable<any[]>;
  meses: Observable<any[]>;
  

  constructor(public db: AngularFireDatabase , private modalService: NgbModal) { 
    this.controles = db.list('controles').valueChanges();
    this.meses = db.list('meses').valueChanges();
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


  /*Modal Novo Mes */
  openNovoMes(contentNovoMes) {
    this.modalService.open(contentNovoMes).result.then((result) => {
      this.closeResultNovoMes = ``;
    }, (reason) => {
      this.closeResultNovoMes = ``;
    });
  }

  private getDismissReasonNovoMes(reason: any): string {
  
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
  
  /* variavel mês atual*/
  public mesAtual: string = '';

  public adicionarGasto(valor: number): void{

    this.gasto = this.gasto +  Number(valor);
    this.saldo = this.renda - this.gasto;
    this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { gasto: this.gasto , saldo: this.saldo });
    
  }

  public adicionarRenda(valor: number): void{
    this.renda = this.renda +  Number(valor);
    this.saldo = this.renda - this.gasto;
    this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { renda: this.renda , saldo: this.saldo });
    

  }

  public iniciarNovoMes(mes: string){
    
    if(this.mesAtual != ''){
      this.db.list('/meses').push({mes: this.mesAtual , gasto: this.gasto});
    }
    
    this.db.list('/controles').update( '-LE6orfO5jwhgPT-ps58', { renda: 0 , gasto: 0 , saldo: 0 });
    
    this.mesAtual = mes;
    this.gasto = 0;
    this.renda = 0;
    this.saldo = 0;
  }

}