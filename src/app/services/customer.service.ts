import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CustomerService {
  public mode !: number;
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
  public getUser(url:any){
    return this.httpClient.get(url)
  }

  public deleteRessource(id:number){
    return this.httpClient.delete(this.host+"/user/"+id);
  }

  public signInUser(url:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post(url, data,httpOptions);
  }
  public updateUser(url:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient
      .put(url, data, httpOptions);
    //return this.httpClient.put(url,data);
  }
}

