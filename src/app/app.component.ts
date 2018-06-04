import { Component } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  
 
  controleValue = '';
  controles: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.controles = db.list('controles').valueChanges();
  }
 
  onSubmit() {
  
  }
}
