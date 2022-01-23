import { Component, OnInit } from '@angular/core';
import {DepartementModel} from "../model/departement.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RessourceService} from "../services/ressource.service";

@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.scss']
})
export class DepartementEditComponent implements OnInit {
  public currentDepartement !: DepartementModel;
  public id !: string;
  public host : string = "http://localhost:8080";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private departementService: RessourceService
  ) { }

  ngOnInit(): void {
    let url = atob(this.activatedRoute.snapshot.params.id);
    console.log("activated  "+this.activatedRoute);
    let a = url.split("/");
    this.id = a[4];
    this.departementService.getRessourceDepartement(this.host+"/departement/"+this.id)
      .subscribe(
        data =>{
          this.currentDepartement = data;
        }, error => {
          console.log(error);
        }
      );
  }

  onUpdateDepartement(value: any) {
    this.departementService.updateRessource(this.departementService.host+"/departement/"+this.id, value)
      .subscribe(
        data =>{
          this.departementService.mode = 7;
          this.router.navigateByUrl("/departement")
        },
        error => {
          console.log(error)
        }
      )

  }
}
