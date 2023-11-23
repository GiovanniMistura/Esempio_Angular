import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>(); // variabile per mandare lo stato del loading

  // metodo per mostrare il loader
  show(){
    this.isLoading.next(true)
  }

  // metodo per nascondere il loader
  hide(){
    this.isLoading.next(false)    
  }

  constructor() { }
}
