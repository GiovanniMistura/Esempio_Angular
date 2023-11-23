import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.scss']
})
export class UsersSearchComponent {
  @Output() startUserSearch = new EventEmitter<string>(); // per mandare la stringa contenete l'utente da cercare

  // metodo per mandare la stringa dell'utente da cercare
  searchUser(event : string){
    this.startUserSearch.emit(event)
  }
}
