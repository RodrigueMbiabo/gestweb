import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RoleModel} from "../model/role.model";
import {Injectable} from "@angular/core";

@Injectable()
export class RessourceService {

  public mode !: number;
  public host: string = "http://localhost:8080";


  constructor(private httpClient: HttpClient){}

  public getRessources(url: any){
    // @ts-ignore
    return this.httpClient.get(url);
  }
  public  getRessource(url:any):Observable<RoleModel>{
    // @ts-ignore
    return this.httpClient.get(url);
  }
  public deleteRessource(url:any){
    return this.httpClient.delete(url)
  }

  public saveRessource(url:any,data: any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.httpClient
      .post(url, data, httpOptions);
  }

  public updateRessource(url:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient
      .put(url, data, httpOptions);
    //return this.httpClient.put(url,data);
  }
}
