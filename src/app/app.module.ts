import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrimeNgModule } from '../utils/PrimeNg.module';
import { HeaderComponent } from './components/header/header.component';
import { ScrollService } from './services/scroll.service';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactoComponent,
    RegisterComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule
  ],
  providers: [
    ScrollService,
    MessageService,
    ConfirmationService,
    DialogService,
    DynamicDialogRef
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
