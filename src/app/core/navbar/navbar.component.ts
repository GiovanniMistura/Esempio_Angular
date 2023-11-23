import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  currentId; // variabile per salvare l'id dell'utente loggato


  constructor(private as : AuthService, private router: Router) {}

  // all'inizzializzazione prendo l'id dell'utente loggato
  ngOnInit(): void {
      this.as.subjectId.subscribe({
        next : (res) => this.currentId = res,
        error: (err) => console.error(err)
    })
  }

  // metodo di log out
  goToLogOut() {
    this.as.resetSession(this.currentId);
    this.router.navigate(['']);
  }

  // metodo per andare al profilo 
  gotToProfile() {
    this.router.navigate(['profile', this.currentId]);
  }

}
