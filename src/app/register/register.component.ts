//Ce composant lie les données de formulaire ( username, email, password...) du modèle à la méthode AuthService.register() qui renvoie un Observableobjet.

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    nom: null,
    prenom: null,
    email: null,
    password: null,
    statut: true,
    departement: null,
    profil: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, nom, prenom} = this.form;

    this.authService.register(username, nom, prenom).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }


}
