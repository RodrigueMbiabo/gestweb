import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //nom : string | undefined;
  public username: string | undefined;
  public nom: string | undefined;
  public prenom: string | undefined;

  constructor(private authService: AuthService) { }

  /*getName(){
    return this.nom  =  this.authService.getNom();
    //console.log("le nom est: "+this.nom)
  }*/
  getUsername(){
    return this.username = this.authService.getUsername();
  }

  getNom(){
    return this.nom = this.authService.getNom();
  }

  getPrenom(){
    return this.prenom = this.authService.getPrenom();
  }


  ngOnInit(): void {
  }

}
