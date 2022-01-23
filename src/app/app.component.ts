
import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {CustomerService} from "./services/customer.service";
import {RessourceService} from "./services/ressource.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    public pageCourante : string | null = "";

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private customerService: CustomerService,
    private roleService: RessourceService
  )
  {}


  ngOnInit(): void {
    localStorage.setItem("identif","ACCUEIL");
    this.pageCourante = localStorage.getItem("identif");
  }


  change(){
      return this.authService.getStatut();
  }


  changeLink(){
    localStorage.setItem("identif","ACCUEIL");
    this.pageCourante = localStorage.getItem("identif");
    this.authService.setStatut(false);
    this.router.navigate(['/login']);
    return this.authService.getStatut();
  }
  changemodeConsulter(){
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion d'utilisateur");
      this.pageCourante = localStorage.getItem("identif");
    }

    this.customerService.mode = 1;
    return this.customerService.mode;
  }
  changemodeAjouter(){
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion d'utilisateur");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.customerService.mode = 2;
    return this.customerService.mode;
  }
  roleConsult(){
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion des Roles");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 1;
    return this.roleService.mode;
  }
  roleAjout(){
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion des Roles");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 2;
    return this.roleService.mode;
  }

  profilConsult() {
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion des Profils");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 4;
    return this.roleService.mode;
  }

  profilAjout() {
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion des Profils");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 5;
    return this.roleService.mode;
  }

  departementConsult() {
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestions des Departements");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 7;
    return this.roleService.mode;
  }

  departementAjout() {
    if (this.authService.getStatut()){
      localStorage.setItem("identif","Gestion des Departements");
      this.pageCourante = localStorage.getItem("identif");
    }
    this.roleService.mode = 8;
    return this.roleService.mode;
  }
  getHome() {
    if (this.authService.getStatut()){
      localStorage.setItem("identif","ACCUEIL");
      this.pageCourante = localStorage.getItem("identif");
    }
  }
}
