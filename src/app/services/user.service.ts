import {User} from '../models/User.model';
import {Subject} from 'rxjs/Subject';

//Ce service contient un array privé d'objets de type personnalisé User et un Subject pour émettre cet array.  
//La méthode emitUsers() déclenche ce Subject
//la méthode  addUser() ajoute un objet User à l'array, puis déclenche le Subject.

export class UserService {
  private users: User[] = [
  new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ]
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
