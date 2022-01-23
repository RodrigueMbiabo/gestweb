import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {AuthService} from "../services/auth.service";
import {CustomerService} from "../services/customer.service";

// @ts-ignore
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  nom !: string;
  password !: string;
  @Input() auth : boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService:AuthService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    localStorage.setItem("errorMess","");
  }

  getErrorMessage(){
    return localStorage.getItem("errorMess");
  }

  //users !: any [] ;
  onSubmit(value: any) {

    this.customerService.signInUser(this.customerService.host+"/user/signin",value)
      .subscribe(
        data =>{
          //console.log(data);
          //console.log("valeur du formulaire "+value);
          this.authentication(data);
          localStorage.setItem("identif","ACCUEIL");
          localStorage.setItem("action","Information personnelle");
          //localStorage.setItem("auth","true");
          this.authService.setStatut(true);
          this.router.navigateByUrl("/home");
        },error => {
          localStorage.setItem("errorMess","Username ou mot de passe incorrect!");
          console.log(error);
        }
      )
  }
  private authentication(data: any): void{
    const Jwt = data.token;
    const username = data.userlog;
    const nom = data.nom;
    const prenom = data.prenom;
    localStorage.setItem("username",username);
    localStorage.setItem("nom",nom);
    localStorage.setItem("prenom",prenom);
    localStorage.setItem("authentication",Jwt);
  }

}
