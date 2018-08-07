import { Routes } from "@angular/router";
import { LoginComponent } from './components/auth/login/login.component'
import { SignupComponent } from './components/auth/signup/signup.component'
import { ConfirmComponent } from './components/auth/confirm/confirm.component'
import { HomeComponent } from './components/views/home/home.component'
import { ProfilePageComponent } from "./components/views/profile-page/profile-page.component";
import { PhotoUploadComponent } from "./components/views/photo-upload/photo-upload.component";
import { PhotoExchangeComponent } from "./components/views/photo-exchange/photo-exchange.component";
import { RecipeListComponent } from './components/views/recipe-list/recipe-list.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'confirm/:id',  component: ConfirmComponent },
  { path: 'profile', component: ProfilePageComponent},
  { path: 'newPhoto', component: PhotoUploadComponent},
  { path: 'photo/wait/:id', component: PhotoExchangeComponent},
  { path: 'profile/recipes', component: RecipeListComponent },
]
