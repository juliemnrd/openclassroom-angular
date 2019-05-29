import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name= 'Appareil'
  status= 'Status'

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {
    //ActivatedRoute pour bloquer l'accès au component si pas le nom d'appareil
   }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // l'objet snapshot contient les paramètres de l'URL
    this.name = this.appareilService.findAppareilById(+id).name;
    this.status = this.appareilService.findAppareilById(+id).status
  }

}
