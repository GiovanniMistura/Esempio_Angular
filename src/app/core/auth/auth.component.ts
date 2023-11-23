import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  users = []; // variabile per salvere gli users presi dal db
  
  selectedUser = new FormControl<string>('', Validators.required);

  constructor(private as : AuthService, private router: Router) {}

  // all'inizzializzazione prendo gli utenti
  ngOnInit(): void {
      this.as.getUsers().subscribe({
        next: (res) => this.users = res.filter( item => !item.isLogged),
        error: (err) => console.error(err)
      })  
  }

  // metodo per il log in
  logIn() {
    if(this.selectedUser.valid){
      this.as.setSession(this.selectedUser.value);
      this.router.navigate(['profile', this.selectedUser.value]);
    }
  }

  // per creare un nuovo utente
  newUser() {
    this.router.navigate(['profile']);
  }

}
