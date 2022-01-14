import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomerService {
  public host: string = "http://localhost:8080";
  constructor(private httpClient: HttpClient){}

  public getUsers2(page: number, size:number){
    return this.httpClient.get(this.host+"/utilisateurs?page="+page+"&size="+size);
  }

  public getUsers(page: number, size:number){
    return this.httpClient.get(this.host+"/users/findBy?page="+page+"&size="+size);
  }
  public getUsersBy(nom: string, page: number, size:number){
    if (nom == ""){
      return this.getUsers(page, size)
    }
    else {
      return this.httpClient.get(this.host+"/users/findBy?nom="+nom+"&page="+page+"&size="+size);
    }

  }
  public getUsersform(){
    return this.httpClient.get(this.host+"/users");
  }

  public deleteRessource(id:number){
    return this.httpClient.delete(this.host+"/user/"+id);
  }
}

