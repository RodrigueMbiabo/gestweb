import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {RessourceService} from "../services/ressource.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public currentUser :any;
  departements: any;
  profils: any;
  roles: any;
  private id !: string;

  constructor(private activatedRoute: ActivatedRoute,
              private constumerEditService: CustomerService,
              private departementService:RessourceService,
              private roleService:RessourceService,
              private profilService:RessourceService,
              private router:Router) { }

  ngOnInit(): void {
    this.onGetDepartements();
    this.onGetProfils();
    this.onGetRoles();
    let url = atob(this.activatedRoute.snapshot.params.id);
    let a = url.split("/");
    this.id = a[4];
    this.constumerEditService.getUser(this.constumerEditService.host+"/user/"+this.id)
      .subscribe(
        data =>{
          this.currentUser = data;
          console.log(this.currentUser);
        }, error => {
          console.log(error);
        }
      );
  }

  onGetDepartements() {
    this.departementService.getRessources(this.departementService.host+"/Departements")
      .subscribe(
        data =>{
          //console.log(data);
          this.departements = data;
          //console.log(this.roles)
        },
        error => {
          console.log(error)
        }
      );


  }
  onGetRoles(){

    this.roleService.getRessources(this.roleService.host+"/Roles")
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

  onGetProfils() {

    this.profilService.getRessources(this.profilService.host+"/Profils")
      .subscribe(
        res =>{
          this.profils = res;
          //console.log("les profils: "+this.profils)
        }, error => {
          console.log(error);
        }
      )
  }


  getMode() {
    return this.constumerEditService.mode;
  }

  onUpdateUser(value: any) {

    const utilisateur = {
      nomDTO: value.nom,
      prenomDTO: value.prenom,
      matriculeDTO: value.matricule,
      emailDTO: value.email,
      passwordDTO: value.password,
      dptDTO: {
        idDptDTO: value.dpt
      },
      roleDTO: {
        idRoleDTO: value.role
      },
      profilDTO: {
        idProfilDTO: value.profil
      },
      userlogDTO: value.userlog
    };

    console.log("utilisateur "+utilisateur.roleDTO.idRoleDTO);

    this.constumerEditService.updateUser(this.constumerEditService.host+"/user/"+this.id,utilisateur)
      .subscribe(
        data =>{
          this.constumerEditService.mode = 1;
          this.router.navigateByUrl("/user");
        }, error => {
          console.log(error)
        }
      )

  }
}
