import { Component, OnInit } from '@angular/core';
import {RessourceService} from "../services/ressource.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {
  public departements : any;
  public id !: number;

  constructor(
    private departementService: RessourceService,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  Mode() {
    return this.departementService.mode;
  }

  onGetDepartements() {
    this.departementService.getRessources(this.departementService.host+"/departements")
      .subscribe(
        data =>{
          //console.log(data);
          this.departements = data;
          localStorage.setItem("identif","Departement");
          localStorage.setItem("action","Consulter");
          //console.log(this.roles)
        },
        error => {
          console.log(error)
        }
      );

  }

  onEditDepartement(d: any) {

    this.departementService.mode = 9;
    let url = d._links.self.href;
    //console.log(url);
    let a = d._links.self.href.split("/");
    this.id = a[4];/*
    localStorage.setItem("identif","Editer");
    localStorage.setItem("action","Consulter");*/
    this.router.navigateByUrl("/departement-edit/"+btoa(url));
  }

  onDeleteDepartement(d: any) {
  if (confirm("voulez vous vraiment supprimer ce departement?")){
    let url = d._links.self.href;
    let id = url.split("/");
    this.departementService.deleteRessource(this.departementService.host+"/departement/"+id[4])
      .subscribe(
        data => {
          this.departements = data;
        }, error => {
          console.log(error)
        }
      )
  }
  }

  onSaveDepartement(value: any) {
    this.departementService.saveRessource(this.departementService.host+"/departement",value)
      .subscribe(
        data =>{
          this.departementService.mode = 7;
          this.router.navigateByUrl("/departement");
          localStorage.setItem("identif","Departement");
          localStorage.setItem("action","Consulter");
        }, error => {
          console.log(error);
        }
      )
  }
}
