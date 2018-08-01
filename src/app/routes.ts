import { Routes } from "@angular/router";
import { LoginComponent } from './components/auth/login/login.component'
import { SignupComponent } from './components/auth/signup/signup.component'
import { ConfirmComponent } from './components/auth/confirm/confirm.component'
import { HomeComponent } from './components/views/home/home.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'confirm/:id',  component: ConfirmComponent }
]
