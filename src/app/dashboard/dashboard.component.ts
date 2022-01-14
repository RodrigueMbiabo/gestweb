import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private customerService: CustomerService) {}

  public currentKeyword : string = "";
  public users: any = undefined;
  public users2: any = undefined;
  public keyword: string ="";
  public size:number = 3;
  public currentPage: number=0;
  public totalPages : number = 0;
  public pages !: Array<number>;
  /*public roles: any = undefined;*/

  ngOnInit(): void {
  }


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
        console.log("je suis dans le getUser()");
        this.users = data;
        //this.totalPages = data.totalPages;
        }, error => {
          console.log(error)
        }
      );
      //console.log("le nombre total de page est :"+this.totalPages);
  }

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
}
