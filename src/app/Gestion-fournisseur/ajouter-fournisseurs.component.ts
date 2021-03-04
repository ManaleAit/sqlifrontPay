import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../Services/service-notifications.service';
import { Fournisseur } from '../models/Fournisseur';
import { ServiceFournisseurService } from '../Services/service-Fournisseur.service';
@Component({
  selector: 'app-ajouter-fournisseurs',
  templateUrl: './ajouter-fournisseurs.component.html',
  styleUrls: ['./ajouter-fournisseurs.component.css']
})
export class AjouterFournisseurComponent implements OnInit {

  send: boolean = false;
  FournisseurCreate: Fournisseur = new Fournisseur();
  constructor(private router: Router, private ServiceFournisseurService: ServiceFournisseurService, private notification: NotificationService) {

  }

  FormulaireControl = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    domaine: new FormControl('', Validators.required),
  }
  );
  
  get nom() {
    return this.FormulaireControl.get('nom');
  }
  get prenom() {
    return this.FormulaireControl.get('prenom');
  }
  get domaine() {
    return this.FormulaireControl.get('domaine');
  }
  


  ngOnInit() {


  }

  save() {
   this.FournisseurCreate = new Fournisseur();
    this.FournisseurCreate.nom = this.FormulaireControl.get('nom').value;
    this.FournisseurCreate.prenom = this.FormulaireControl.get('prenom').value;
    this.FournisseurCreate.domaine = this.FormulaireControl.get('domaine').value;
   
   this.ServiceFournisseurService.demandeCreateFournisseur(this.FournisseurCreate)
      .subscribe(
        (data) => {
          console.log("data ", data);
          if(data!=null){
          

          this.notification.showSuccess("la demande a été bien envoyee", "  Création du Fournisseur");

        }


        },
        error => {      
          console.log("Error", error);
        }
      );
  }



  SendChange() {

    this.send = true;
    console.log(this.FormulaireControl);
  }

  onSubmit() {
    
    if (this.FormulaireControl.valid) {
      this.save();
      this.resetForm();

    } else if (this.send) {
      this.notification.showWarning("Veuillez remplir les champs du formulaire", "Attention!!!!!!!");
    }

  }


  resetForm() {

    this.FormulaireControl.reset({
      nom: '',
      prenom: '',
      domaine: '',
     
    }
    );
    this.send = false;

  }
}
