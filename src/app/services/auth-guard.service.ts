import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService,
              private router: Router){}

  canActivate(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                // @ts-ignore
              ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree > {
    if (this.authService.getStatut()){
      console.log(this.authService.getStatut());
      return true
    } else {
      this.router.navigate(['/login'])
    }
              }

}
