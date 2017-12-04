import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Car} from './interfaces/car';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMW Firestore';
  carCollection: AngularFirestoreCollection<Car>;
  cars: Observable<Car[]>;

  constructor(private afs: AngularFirestore) {
    this.carCollection = this.afs.collection<Car>('cars');
    this.cars = this.carCollection.valueChanges();
  }
}
