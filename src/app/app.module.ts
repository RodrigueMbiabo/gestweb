import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {AuthService} from "./services/auth.service";
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./services/auth-guard.service";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./services/customer.service";
import { NewUserComponent } from './new-user/new-user.component';
import { RoleComponent } from './role/role.component';
import {RessourceService} from "./services/ressource.service";
import { RoleEditComponent } from './role-edit/role-edit.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { DepartementComponent } from './departement/departement.component';
import { DepartementEditComponent } from './departement-edit/departement-edit.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate:[AuthGuard], component: HomeComponent},
  {path: 'dashboard', canActivate:[AuthGuard],component: DashboardComponent},
  {path: 'user', component: NewUserComponent},
  {path: 'role', component: RoleComponent},
  {path: 'role-edit/:id', component: RoleEditComponent},
  {path:'', component: LoginComponent},
  {path:'not-found', component:FourOhFourComponent},
  {path:'**', redirectTo:('/not-found')}

];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FourOhFourComponent,
    HomeComponent,
    NewUserComponent,
    RoleComponent,
    RoleEditComponent,
    ProfilComponent,
    ProfilEditComponent,
    DepartementComponent,
    DepartementEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,
    AuthService,
    AuthGuard,
    CustomerService,
    RessourceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
