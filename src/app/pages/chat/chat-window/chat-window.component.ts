import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit{

  @Input() usersMessages = []; // lista con tutti i messaggi aventi mittente e ricevente specificati 
  @Input() senderId; // ricevo il mittente id
  @Input() receiverId; // ricevo il ricevente id

  //receiverMessages = [];
  //senderMessages = [];

  constructor() {}

  ngOnInit(): void {
      //this.receiverMessages = this.usersMessages.filter( (msg) => msg.receiver == this.receiverId);
      //this.senderMessages = this.usersMessages.filter( (msg) => msg.sender == this.senderId);
      //this.receiverMessages.sort((a,b) => (a.date > b.date ? 1 : -1));
      //this.senderMessages.sort((a,b) => (a.date > b.date ? 1 : -1));
  }


}
