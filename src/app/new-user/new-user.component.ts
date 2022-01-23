import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {RessourceService} from "../services/ressource.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private departementService: RessourceService,
    private roleService: RessourceService,
    private profilService: RessourceService,
    private router: Router
    ) {}

  public currentKeyword : string = "";
  public users: any = undefined;
  public users2: any = undefined;
  public keyword: string ="";
  public size:number = 3;
  public currentPage: number=0;
  public totalPages : number = 0;
  public pages !: Array<number>;
  public departements: any;
  public profils : any;
  public roles !: any;
  //public mode !: number;
  /*public roles: any = undefined;*/




  onGetUser() {
    this.customerService.getUsers2(this.currentPage, this.size)
      .subscribe(
        data2 =>{
          //console.log("Je suis dans le getUser2()");
          this.users2 = data2;

          //console.log("utilisateur 1:"+this.users2);

          // @ts-ignore
          this.totalPages = data2["page"].totalPages;

          //console.log("Fonction 1 :"+this.totalPages);

          this.pages = new Array<number>(this.totalPages);
        }, error => {
          console.log(error)
        }
      );
    this.customerService.getUsers(this.currentPage,this.size)
      .subscribe(
        data =>{
          //console.log("je suis dans le getUser()");
          this.users = data;
          //this.totalPages = data.totalPages;
        }, error => {
          console.log(error)
        }
      );
    //console.log("le nombre total de page est :"+this.totalPages);
  }
  /*changeMode(){
    return this.mode == 1;
  }*/

  Cherhcer(){
    this.customerService.getUsers2(this.currentPage, this.size)
      .subscribe(
        data2 =>{
          //this.users2 = data2;
          // @ts-ignore
          this.totalPages = data2["page"].totalPages;
          this.pages = new Array<number>(this.totalPages);
        }, error => {
          console.log(error)
        }
      );
    //console.log(f.value['keyword']);
    this.customerService.getUsersBy(this.currentKeyword,this.currentPage,this.size)
      .subscribe(
        data =>{
          //console.log("je suis dans le getUser()");
          this.users = data;
          //this.totalPages = data.totalPages;
        }, error => {
          console.log(error)
        }
      );
  }
  onCherhcer(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.value['keyword'];
    this.Cherhcer();
  }

  onPageUser(i: number) {
    this.currentPage = i;
    //this.onGetUser();
    this.Cherhcer();
  }

  onDelete(u:any) {
    if (confirm("voulez vous supprimer?")){
      this.customerService.deleteRessource(u.idUser)
        .subscribe(data =>{
            this.Cherhcer();
          },error => {
            console.log(error);
          }
        )
    }
  }

  getMode(){
    return this.customerService.mode;
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

  ngOnInit(): void {
    this.onGetDepartements();
    this.onGetProfils();
    this.onGetRoles();
  }

  onSaveUser(value: any) {
    const utilisateur = {
      nom: value.nom,
      prenom: value.prenom,
      matricule: value.matricule,
      email: value.email,
      password: value.password,
      dpt: {
        idDpt: value.dpt
      },
      role: {
        idRole: value.role
      },
      profil: {
        idProfil: value.profil
      },
      userlog: value.userlog
    };
    //console.log("Valeur du dp "+value.dpt);
    this.customerService.signInUser(this.customerService.host+"/user",utilisateur)
      .subscribe(
        data =>{
          this.customerService.mode = 1;
          this.router.navigateByUrl("/user")
        }, error => {
          console.log(error);
        }
      )

  }

  onUpdateUser(u:any) {
    this.customerService.mode = 10;
    let url =  this.customerService.host+"/user/"+u.idUser;
    this.router.navigateByUrl("/user-edit/"+btoa(url));
  }
}
