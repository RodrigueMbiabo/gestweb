import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RessourceService} from "../services/ressource.service";
import {RoleModel} from "../model/role.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  public roles !: any;
  id !: number;
  public currentRole !: RoleModel;
  constructor(private httpClient: HttpClient,
              private roleService: RessourceService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}



  onGetRoles(){
    this.getAccess();
    this.roleService.getRessources(this.roleService.host+"/roles")
      .subscribe(
        data =>{
          this.roles = data;
          //console.log(this.roles)
        },
        error => {
          console.log(error)
        }
      );
  }

  getAccess(){
    if (localStorage.getItem("acces") == "1"){
      return true
    } else return false;
  }
  onDeleteRole(r:any){
    if (confirm("voulez vous vraiment supprimer ce role?")){
      //console.log("j'affiche "+r._links.self.href)
      this.roleService.deleteRessource(r._links.self.href)
        .subscribe(
          data =>{
            this.roles = data;
          },
          error => {
            console.log(error)
          }
        );
    }
  }


  onSaveRole(data: any) {
    /*console.log("donnée du formulaire "+data);
    data = JSON.stringify(data);
    console.log("donnée du formulaire "+data);*/
    //console.log(data)
    this.roleService.saveRessource(this.roleService.host+"/role",data)
      .subscribe(
        res =>{
          this.roleService.mode = 1;
          this.router.navigateByUrl("/role")
        },err =>{
          console.log(err)
        }
        )
  }
  roleMode(){
    return this.roleService.mode;
  }

  ngOnInit(): void {
  }
  onEditRole(r:any) {
    this.roleService.mode=3;
    let url = r._links.self.href;
    let a = r._links.self.href.split("/");
    this.id = a[4];
    this.router.navigateByUrl("/role-edit/"+btoa(url))
    //this.encodeUrl("http://localhost:8080/role/"+this.id)
  }

}
