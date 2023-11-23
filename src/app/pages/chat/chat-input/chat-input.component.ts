import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  msg; // testo del messaggio
  myMessage = new Message(); // messaggio da inviare
  @Input() senderId; // ricevo il mittente id
  @Input() receiverId; // ricevo il ricevente id

  constructor(private chatService: ChatService) {}

  // metodo per mandare il messaggio
  sendMsg(){
    if(this.msg){
      //alert(this.msg)
      //creo il messaggio
      this.myMessage.date = new Date();
      this.myMessage.msg = this.msg;
      this.myMessage.receiver = this.receiverId;
      this.myMessage.sender = this.senderId;
      console.log(this.myMessage)
      //mando il messaggio
      this.chatService.sendMessage(this.myMessage).subscribe({
        next: (res)=> this.msg = '',
        error: (err) => err
      });      
    }
  }
}
