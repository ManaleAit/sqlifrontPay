import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/Fournisseur';
@Injectable({
  providedIn: 'root'
})
export class ServiceFournisseurService {
  private baseUrl = 'http://localhost:8080/Fournisseur/';
  constructor(private http: HttpClient) { }

  demandeCreateFournisseur(Fournisseur: Object): any {

    return this.http.post(`${this.baseUrl}`, Fournisseur);
  }
 

  getFournisseurList():Observable<any[]> {
   
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  
  createFournisseur(Fournisseur: Object): any {
    return this.http.post(`${this.baseUrl}`, Fournisseur);
  }
 

  updateFournisseur(value: Fournisseur): any {
  
    return this.http.put(`${this.baseUrl}${value.id}`,value);
  }

  deleteFournisseur(id: any): any {
  
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  getFournisseur(id: any): any {
    return this.http.get(`${this.baseUrl}${id}`);
  }
 
 
}
