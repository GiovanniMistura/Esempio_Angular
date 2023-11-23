import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subjectId = new BehaviorSubject<string>(''); // per mandare l'id dell'utente loggato

  users = []; // variabile per avere gli utenti non loggati

  // metodo per ottenere l'id dell'utente loggato
  getSessionUserId() {
    return this.subjectId.asObservable();
  }

  constructor(private api: ApiService) { }

  // setta l'id dell'utente come id della sessione (circa)
  setSession(id) {
    if (id) {
      this.setSessionStatus(id, true).subscribe({
        next: (res) => this.subjectId.next(id),
        error: (err) => console.error('Impossibile aggiornare l\'utente: ', err)
      })
    }
  }

  // resetta l'id della sessione (circa)
  resetSession(id) {
    if(id){
      this.setSessionStatus(id, false).subscribe({
        next: (res) => this.subjectId.next(''),
        error: (err) => console.error('Impossibile aggiornare l\'utente: ', err)
      })
    }
  }

  // metodo che ottiene gli utenti non loggati 
  getUsers() {
    return this.api.getUsers().pipe(map(user => {
      const ids = Object.keys(user);
      const res = ids.map(id => {
        return {
          ...user[id],
          id: id
        }
      })
      return res
    }));
  }

  // metodo per settare lo stato della sessione (circa)
  setSessionStatus(_id: string, _status: boolean) {
    return this.api.updatePartialUser({ id: _id, isLogged: _status })
  }

}

