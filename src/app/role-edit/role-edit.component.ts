import { Component, OnInit } from '@angular/core';
import {RessourceService} from "../services/ressource.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RoleModel} from "../model/role.model";

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {
  public currentRole !: RoleModel;
  public id !: string;
  public host : string = "http://localhost:8080";
  constructor(
    private roleService: RessourceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let url = atob(this.activatedRoute.snapshot.params.id);
    let a = url.split("/");
    this.id = a[4];
    //this.roleService.getRole(url)
    //type retour != DTO dans le mode et le template
    this.roleService.getRessource(this.host+"/role/"+this.id)
      .subscribe(data =>{
        this.currentRole = data;
      },error1 => {
        console.log(error1);
      });
  }


  onUpdate(data: any) {
    this.roleService.updateRessource(this.roleService.host+"/role/"+this.id,data)
      .subscribe(
        res =>{
          this.roleService.mode = 1;
          this.router.navigateByUrl("/role")
        },
        error => {
          console.log(error)
        }
      )
  }
}
