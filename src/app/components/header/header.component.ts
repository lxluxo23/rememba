import { Component} from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ScrollService } from 'src/app/services/scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{

  constructor(
    private router : Router,
    private scrollService : ScrollService,
    private ref: DynamicDialogRef,
    public dialogService: DialogService,
  
  ) { }

  scrollToSection(seccion: string){
    this.scrollService.scrollTo(seccion)
  }

  openContact(){
    console.log(" [ abriendo contacto ] " )
    this.router.navigate(['/contacto']) 

    // this.ref = this.dialogService.open(ContactoComponent, {
    //     header: 'Contacto',
    //     styleClass:'responsive-modal',
    //     autoZIndex: true,
    //     width: '60vw',
    //     modal: true,
    //     breakpoints: {
    //       '960px': '75vw',
    //       '640px': '90vw'
    //   },
    // });
  }

}
