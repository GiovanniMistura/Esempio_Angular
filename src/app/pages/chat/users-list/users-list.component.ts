import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() users; // ricevo in input tutti gli utenti
  @Output() userSelected = new EventEmitter<any>(); // per mandare l'utente selezionato a cui voglio mandare il messaggio


  constructor(private router: Router, private chatService: ChatService){
  }

  ngOnInit(){
  
  }

  // metodo per eliminare un utente
  deleteUser(id){
     this.chatService.deleteUser(id).subscribe({
       next: () => {
       },
       error: () => {
         alert('Errore: utente non cancellato')
       }
     })
  }
  
  // metodo per andare al profilo dell'utente selezionato
  goToProfile(id){
    this.router.navigate(['profile', id])
  }

  // metodo per mandare id dell'utente selezionato a cui voglio mandare il messaggio
  emitUserId(id) {
    this.userSelected.emit(id);
  }
}
