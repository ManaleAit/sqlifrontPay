import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import {NotificationService} from '../app/Services/service-notifications.service';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './Navbar/navbar.component';
import { AfficherFournisseursComponent } from './Gestion-fournisseur/afficher-fournisseurs.component';
import { AjouterFournisseurComponent } from './Gestion-fournisseur/ajouter.fournisseurs.component';
//import { TokenInterceptor } from './Services/token-interceptor';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    StorageServiceModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot()
   
  ], 
  declarations: [
    AppComponent,
    AfficherFournisseursComponent,
    AjouterFournisseurComponent,
    NavbarComponent,

  ],
  providers: [
    NotificationService,/*{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }*/,
    /*{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}*/
  
  ],
  
  bootstrap: [AppComponent],
})
export class AppModule {
}