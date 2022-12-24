import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-inmueble-app';

  constructor(private fs:AngularFirestore){}

  ngOnInit() {
    this.fs.collection('test').stateChanges().subscribe(personas =>{
      console.log(personas.map(x=>x.payload.doc.data()))
    })
  }
}
