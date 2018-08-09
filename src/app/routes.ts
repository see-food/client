import { Routes } from "@angular/router";
import { LoginComponent } from './components/auth/login/login.component'
import { SignupComponent } from './components/auth/signup/signup.component'
import { ConfirmComponent } from './components/auth/confirm/confirm.component'
import { HomeComponent } from './components/views/home/home.component'
import { ProfilePageComponent } from "./components/views/profile-page/profile-page.component";
import { PhotoUploadComponent } from "./components/views/photo-upload/photo-upload.component";
import { PhotoExchangeComponent } from "./components/views/photo-exchange/photo-exchange.component";
import { RecipeListComponent } from './components/views/recipe-list/recipe-list.component'
import { PhotoListComponent } from './components/views/photo-list/photo-list.component'
import { RecipeComponent } from './components/views/recipe/recipe.component'
import { PhotoComponent } from "./components/views/photo/photo.component";
import { SessionGuardService } from "./services/session.guard";
import { PageNotFoundComponent } from "./components/views/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'confirm/:id',  component: ConfirmComponent , canActivate: [SessionGuardService] },
  { path: 'profile', component: ProfilePageComponent , canActivate: [SessionGuardService]},
  { path: 'newPhoto', component: PhotoUploadComponent , canActivate: [SessionGuardService]},
  { path: 'photo/wait/:id', component: PhotoExchangeComponent, canActivate: [SessionGuardService]},
  { path: 'photo/:id', component: PhotoComponent, canActivate: [SessionGuardService]},
  { path: 'profile/recipes', component: RecipeListComponent, canActivate: [SessionGuardService] },
  { path: 'recipe/:id', component: RecipeComponent, canActivate: [SessionGuardService] },
  { path: 'profile/photos', component: PhotoListComponent, canActivate: [SessionGuardService]},
  { path: '**', component: PageNotFoundComponent}
]
