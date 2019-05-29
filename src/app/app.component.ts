import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit(){
    const counter = Observable.interval(1000);
    counter.subscribe( //subscribe permet d'observer l'Observable
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log("an error occured :" + error);
      },
      () => {
        console.log("observable completed")
      }
    )
  };
    
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
