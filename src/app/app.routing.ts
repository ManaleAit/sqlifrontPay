import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AfficherFournisseursComponent } from './Gestion-fournisseur/afficher-fournisseurs.component';
import { AjouterFournisseurComponent } from './Gestion-fournisseur/ajouter.fournisseurs.component';
import { AuthGuard } from './Services/AuthGuard';
const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
  
  ,{
    path:'Fournisseurs',//canActivate: [AuthGuard],
    component:AfficherFournisseursComponent
  }
  ,{
    path:'ajoutFournisseur',//canActivate: [AuthGuard],
    component:AjouterFournisseurComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
