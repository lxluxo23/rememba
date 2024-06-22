import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
  title = 'rememba'

  // ----------------- parametros del tamaño de la letra -----------------
  scale : number = 16

  constructor(private primengConfig: PrimeNGConfig) {} 

  ngOnInit(){
    this.primengConfig.ripple = true;
    this.applyScale()
  }
  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
}
}
