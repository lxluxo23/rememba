import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }


  scrollTo(seccion : string){
    console.log (" [ haciendo scroll hacia ] ")
    console.log (seccion) 
    document.getElementById(seccion)?.scrollIntoView({behavior: 'smooth'})
  }
}
