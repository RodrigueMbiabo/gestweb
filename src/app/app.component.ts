
import {Component, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
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

}
