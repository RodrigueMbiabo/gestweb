
export class AuthService {

  private username : string |undefined;
  private nom : string | undefined;
  private prenom: string | undefined;
  private password : string | undefined;
  private statut : boolean = false;

  setNom(nom: string){
    this.nom = nom
  }
  setPrenom(prenom: string){
    this.prenom = prenom
  }
  setUsername(username: string){
    this.username = username;
  }
  /*setNom(nom: string){
    this.nom = nom;
  }*/
  setPassword(password: string){
    this.password = password;
  }
  setStatut(statut: boolean){
    this.statut = statut
  }
  getUsername(){
    return this.username
  }
  getNom(){
    return this.nom
  }

  getPrenom(){
    return this.prenom
  }
  /*getNom(){
    //this.clearData();
    return this.nom
  }*/
  /*getPassword(){
    let tempo = this.password;
    this.clearData();
    return tempo
  }*/

  getStatut(){
    // this.clearData();
    return this.statut
  }
  /*getData(){
    let temp = this.data;
    this.clearData();
    return temp;
  }*/

  /*clearData(){
    this.nom = undefined;
    this.password = undefined;
  }*/

}
