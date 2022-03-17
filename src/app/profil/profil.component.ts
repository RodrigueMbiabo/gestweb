import { Component, OnInit } from '@angular/core';
import {RessourceService} from "../services/ressource.service";
import {ProfilModel} from "../model/profil.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public id !: number;
  public profils: any;

  constructor(private profilService: RessourceService,
              private httpClient: HttpClient,
              private router: Router,
              ) { }

  ngOnInit(): void {
  }

  onGetProfils() {
    this.getAccess();
    this.profilService.getRessources(this.profilService.host+"/profils")
      .subscribe(
        res =>{
          this.profils = res;
        }, error => {
          console.log(error);
        }
      )
  }
  getAccess(){
    if (localStorage.getItem("acces") == "1"){
      return true
    } else return false;
  }

  Mode() {
    return this.profilService.mode;
  }

  onSaveProfil(value: any) {

    this.profilService.saveRessource(this.profilService.host+"/profil",value)
      .subscribe(
        data=>{
          this.profilService.mode = 4;
          this.router.navigateByUrl("/profil");
        }, error => {
          console.log(error);
        }
      )

  }

  onEditProfil(p: any) {
    this.profilService.mode = 6;
    let url = p._links.self.href;
    let a = p._links.self.href.split("/");
    this.id = a[4];
    this.router.navigateByUrl("/profil-edit/"+btoa(url))
  }

  onDeleteProfil(p: any) {
    //console.log("affichage de l'id",p.idDTO);
    if (confirm("voulez vous vraiment supprimer ce profil?")){
      let url = p._links.self.href;
      let id = url.split("/");
      console.log("voici l'id "+id[4]);
      this.profilService.deleteRessource(this.profilService.host+"/profil/"+id[4])
        .subscribe(
          data => {
            this.profils = data;
          }, error => {
            console.log(error)
          }
        )
    }
  }
}
