import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class ChatService {

  constructor(private api: ApiService) { }

  // prende tutti gli utenti nel db
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

  // elimana speicifico user dal db
  deleteUser(id){
    return this.api.deleteUser(id)
  }

  // riceve la chat tra il sender e il receiver selezionati
  getConversation(sender , receiver) {
    return this.api.getMessages().pipe(map(msg => {
      const ids = Object.keys(msg);
      const res = ids.map(id => {
        return {
          ...msg[id]
        }
      })
      return res
    }),        
    map(msgs => msgs.filter(msg => 
      (msg.sender == sender && msg.receiver == receiver)
      ||
      (msg.receiver == sender && msg.sender == receiver)
    ))
    );
  }

  // metodo per mandare un messaggio
  sendMessage(msg) {
    return this.api.sendMessage(msg);
  }
}