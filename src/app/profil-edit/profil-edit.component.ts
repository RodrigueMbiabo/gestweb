import { Component, OnInit } from '@angular/core';
import {ProfilModel} from "../model/profil.model";
import {RessourceService} from "../services/ressource.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.scss']
})
export class ProfilEditComponent implements OnInit {
  public currentProfil !: ProfilModel;
  public id !: string;
  public host : string = "http://localhost:8080";

  constructor(
    private profilService: RessourceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let url = atob(this.activatedRoute.snapshot.params.id);
    let a = url.split("/");
    this.id = a[4];
    this.profilService.getRessourceProfil(this.host+"/profils/"+this.id)
      .subscribe(data =>{
      this.currentProfil = data;
    },error1 => {
      console.log(error1);
    });
  }

  onUpdateProfil(data: any) {

    this.profilService.updateRessource(this.profilService.host+"/profil/"+this.id, data)
      .subscribe(
      res =>{
        this.profilService.mode = 4;
        this.router.navigateByUrl("/profil")
      },
      error => {
        console.log(error)
      }
    )

  }
}
