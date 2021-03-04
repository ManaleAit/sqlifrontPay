import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fournisseur } from '../models/Fournisseur';
import { ServiceFournisseurService } from '../Services/service-Fournisseur.service';
import { NotificationService } from '../Services/service-notifications.service';

@Component({
  selector: 'app-afficher-fournisseurs',
  templateUrl: './afficher-fournisseurs.component.html',
  styleUrls: ['./afficher-fournisseurs.component.css']
})
export class AfficherFournisseursComponent implements OnInit {
  Fournisseurs:Fournisseur[]=[];
  SelectDelete:Fournisseur=new Fournisseur();
  send: boolean = false;
  FournisseurCreate: Fournisseur = new Fournisseur();
  UpdateSelect:Fournisseur=new Fournisseur();
  constructor(private notification:NotificationService,private ServiceFournisseurService: ServiceFournisseurService) {

  }

  FormulaireControl = new FormGroup({
    nom: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    domaine: new FormControl('', Validators.required),
 

  }
  );
 
  get amount() {
    return this.FormulaireControl.get('amount');
  }
  get nom() {
    return this.FormulaireControl.get('nom');
  }
  get prenom() {
    return this.FormulaireControl.get('prenom');
  }
  get domaine() {
    return this.FormulaireControl.get('domaine');
  }
  
 

  save() {
    this.UpdateSelect.nom = this.FormulaireControl.get('nom').value;
    this.UpdateSelect.prenom = this.FormulaireControl.get('prenom').value;
    this.UpdateSelect.domaine = this.FormulaireControl.get('domaine').value;
   
     this.ServiceFournisseurService.updateFournisseur(this.UpdateSelect)
      .subscribe(
        (data) => {
          console.log("data ", data);
          if(data!=null){
          

          this.notification.showSuccess("la demande a été bien modifié", " le Fournisseur est bien modifier");

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
  ngOnInit() {
    this.ServiceFournisseurService.getFournisseurList().subscribe(
      data => {
        console.log(data);
        this.Fournisseurs=data;
      },
      error => console.log(error));
  }
  onSelectDelete(Fournisseur: Fournisseur): void {
    this.SelectDelete = Fournisseur;
  }
  onSelectUpdate(Fournisseur: Fournisseur): void {
    this. UpdateSelect = Fournisseur;
    this.FormulaireControl.get('nom').setValue(this.UpdateSelect.nom);
    this.FormulaireControl.get('prenom').setValue(this.UpdateSelect.prenom);
    this.FormulaireControl.get('domaine').setValue(this.UpdateSelect.domaine);

  }
  onSubmitDelete() {
    
    this.ServiceFournisseurService.deleteFournisseur(this.SelectDelete.id)
    .subscribe(
      data => {
      
        this.notification.showSuccess("le Fournisseur est supprimer", "Fournisseur bien supprimer");
       
       
      },
      error => console.log(error));
 

     /* this.delay(500).then(any => {
        this.ServiceFournisseurService.getFournisseurList().subscribe(
          data => {
            console.log(data);
            this.Fournisseurs=data;
          },
          error => console.log(error));
      });  */  
  
  }
 /* async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("allow download"));
  }*/

 
}
