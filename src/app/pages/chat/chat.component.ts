import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{

  users; // variabile per tutti gli utenti
  senderId : string = ''; // sender id 
  receiverId = '' // receiver id 
  messages = []; // lista dei messaggi 

  constructor(private chatService : ChatService, private authService : AuthService){
  }

  // all'inizializzazione ricevo l'id dell'utente e carico tutti gli altri utenti
  ngOnInit(){
    this.authService.getSessionUserId().subscribe(id => this.senderId = id)
    
    this.loadUsers();
  }

  // carico gli altri utenti in users
  loadUsers(){
    this.chatService.getUsers().subscribe({
      next: (res) => this.users = res,
      error: (err) => console.error(err)
    })
  }

  // carico la chat dell'utente loggato
  loadChat(_receiver : string){
    this.receiverId = _receiver;
    this.chatService.getConversation(this.senderId,_receiver).subscribe({
      next: (res) =>  this.messages = res,
      error: (err) => console.error(err)
     })
    
  }

  // metodo per cercare uno specifico utente tra tutti
  searchUser(event : string){
    this.chatService.getUsers().subscribe({
      next: (res) => {
        this.users = res.filter((user) => `${user?.firstName.toLowerCase()} ${user?.lastName.toLowerCase()}`.includes(event.toLowerCase()))
      },
      error: (err) => console.error(err)
    })
  }
}
