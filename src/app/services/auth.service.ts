//Ce service envoie des demandes d'inscription et de connexion HTTP POST au back-end.

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


const AUTH_API = 'http://localhost:8080/api/v1/utilisateurs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  logins(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + '/login' , {
      username,
      password
    }, httpOptions)
  }

  register(username: string, nom: string, prenom: string, email: string, password: string, statut: boolean, departement: bigint, profil: bigint ): Observable<any> {
    return this.http.post(AUTH_API, {
      username,
      nom,
      prenom,
      email,
      password,
      statut,
      departement,
      profil
    }, httpOptions)
  }

  private statut : boolean = false;
  setStatut(statut: boolean){
    this.statut = statut
  }
  getStatut(){
    return this.statut
  }


}
