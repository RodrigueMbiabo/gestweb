//ce service fournit des méthodes pour accéder aux ressources publiques et protégées.

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
const API_URL = 'http://localhost:8080/api/v1/utilisateurs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


}
