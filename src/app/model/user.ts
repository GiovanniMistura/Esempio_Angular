import { Contact } from "./contact";

export class User {
    id: number; // id dell'utente
    firstName: string; // nome 
    lastName: string; // cognome
    birthDate: Date; // data di nascita
    bio: string; // biografia
    photoUrl: string; // url della foto (per ora standard per tutti)
    isLogged: boolean; // se è loggato
    job: string; // lavoro
    contacts: Contact[]; // contatti -> non usato 
  }