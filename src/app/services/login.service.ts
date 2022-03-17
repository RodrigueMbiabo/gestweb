import {CustomerService} from "./customer.service";
import {Injectable} from "@angular/core";
import {AuthGuard} from "./auth-guard.service";
import {AuthService} from "./auth.service";

@Injectable()
export class LoginService{
  private users: any = undefined;
  public size:number = 3;
  public currentPage: number=0;
  constructor(private customerService: CustomerService,
              private authService:AuthService){}
  public auth = false;
  /*public Users = [
    {
      nom :"MBIAHA",
      username : 'Rod20',
        password : 'rodrigo1234'
    },
    {
      nom : "Talla Franck",
      username: 'franc30',
      password: 'franco1234'
    },
    {
      nom: "KAMOE JOSPIN",
      username: 'pier10',
      password: 'Delpierrot45'
    }
  ];
*/
  /*searchOnAll(username:string,password:string){
    const utilisateur = this.Users.find(
      (userObject) =>{
        return userObject.username == username && userObject.password == password && userObject.username}
    );
    return utilisateur
  }
  */
  //Recherche Pour la vérification au niveau des données du formulaire

 /*
  searchOnAll(username:string,password:string){
    //Liste tous les utilisateurs de la base de donnée
    this.customerService.getUsersform()
      .subscribe(
        data =>{
          this.users = data;
        }, error => {
          console.log(error)
        }
      );

    const utilisateur = this.users.find(
      (userObject: { userlogDTO: string; passwordDTO: string; })=>{
        return userObject.userlogDTO == username
      }
    );
    /!*this.users.find(
      ((userObject: { userlogDTO: string; passwordDTO: string; }) =>{
        return userObject.userlogDTO == username && userObject.passwordDTO == password
      })
    );*!/
    this.authService.setNom(utilisateur.nomDTO);
    this.authService.setUsername(utilisateur.userlogDTO);
    this.authService.setPrenom(utilisateur.prenomDTO);
    //this.authService.setPassword(password);
    //console.log("l'utilisateur est : "+utilisateur.nomDTO);
    return utilisateur
  }*/


}
