
import {Component, OnInit} from '@angular/core';
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
    public activeConsult: string = "";
    public activeAjout: string = "";
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private customerService: CustomerService,
    private roleService: RessourceService
  )
  {}


  ngOnInit(): void {}


  change(){

      return this.authService.getStatut();
  }

  changeLink(){

  this.authService.setStatut(false);
    this.router.navigate(['/login']);
    return this.authService.getStatut();
  }
  changemodeConsulter(){
    this.customerService.mode = 1;
    return this.customerService.mode;
  }
  changemodeAjouter(){
    this.customerService.mode = 2;
    return this.customerService.mode;
  }
  roleConsult(){
    this.roleService.mode = 1;
    return this.roleService.mode;
  }
  roleAjout(){
    this.roleService.mode = 2;
    return this.roleService.mode;
  }
}
