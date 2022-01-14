import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";
import {AuthService} from "../services/auth.service";

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
    private authService:AuthService
  ) {}

  ngOnInit(): void {
  }

  //users !: any [] ;
  onSubmit(form: any) {

    const nom = form.value['nom'];
    const password = form.value['password'];

    /*this.authService.setUsername(nom);
    this.authService.setPassword(password);*/

    if (this.loginService.searchOnAll(nom,password)){
      //this.users[0] = this.loginService.searchOnAll(nom,password);
      //this.loginService.Users[0] = this.loginService.searchOnAll(nom,password)
      this.authService.setStatut(true);


      //console.log(this.authService.getStatut());
      this.router.navigate(['/home']);
    }
    else {
      //console.log("je suis dans le else")
      //confirm("Mot de passe incorrect");
      alert("Mot de passe ou nom d'utilisateur incorrect");
      this.router.navigate(['/login']);
    }
  }

}
