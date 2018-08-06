import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { routes } from './routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ConfirmComponent } from './components/auth/confirm/confirm.component';
import { HomeComponent } from './components/views/home/home.component'
import { FileUploadModule } from 'ng2-file-upload'
import { SessionService } from './services/session.service';
import { RecipesService } from './services/recipes.service';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { TabbarComponent } from './components/views/tabbar/tabbar.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatMenuModule, MatStepperModule } from '@angular/material';
import { ProfilePageComponent } from './components/views/profile-page/profile-page.component';
import { RecipeListComponent } from './components/views/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmComponent,
    HomeComponent,
    PhotoUploadComponent,
    NavbarComponent,
    TabbarComponent,
    ProfilePageComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatStepperModule,
    FileUploadModule
  ],
  providers: [
    SessionService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
