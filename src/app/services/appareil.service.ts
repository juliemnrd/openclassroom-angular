import {Subject} from 'rxjs/Subject'

export class AppareilService {

  appareilsSubject = new Subject<any[]>( // dire quel type de données il gèrera, ici any[]

  )

   private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Frigo',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

    emitAppareilSubject() { //Quand le service reçoit de nouvelles données, fait émettre ces données par le Subject
      this.appareilsSubject.next(this.appareils.slice());
    }

    switchOnAll() {
      for(let appareil of this.appareils) {
        appareil.status = 'allumé';
      }
      this.emitAppareilSubject();
    }
    
    switchOffAll() {
      for(let appareil of this.appareils) {
         appareil.status = 'éteint';
      }
      this.emitAppareilSubject();
    }

    switchOnOne(i: number) {
      this.appareils[i].status = 'allumé';
      this.emitAppareilSubject();
  }
  
    switchOffOne(i: number) {
      this.appareils[i].status = 'éteint';
      this.emitAppareilSubject();
  }
    
    findAppareilById(id: number){
      const appareil = this.appareils.find((app)=>{
        return app.id === id;
        }
      );
      return appareil;
    }
}