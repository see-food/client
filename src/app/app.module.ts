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
import { PhotoUploadComponent } from './components/views/photo-upload/photo-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { TabbarComponent } from './components/views/tabbar/tabbar.component';
import { MatInputModule, MatIconModule, MatButtonModule, MatMenuModule, MatStepperModule, MatCardModule, MatListModule } from '@angular/material';
import { ProfilePageComponent } from './components/views/profile-page/profile-page.component';
import { RecipeListComponent } from './components/views/recipe-list/recipe-list.component';
import { PhotoExchangeComponent } from './components/views/photo-exchange/photo-exchange.component';
import { PhotoListComponent } from './components/views/photo-list/photo-list.component';
import { RecipeComponent } from './components/views/recipe/recipe.component';
import { RecipeCardComponent } from './components/views/recipe-card/recipe-card.component';
import { PhotoCardComponent } from './components/views/photo-card/photo-card.component';

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
    RecipeListComponent,
    PhotoExchangeComponent,
    PhotoListComponent,
    RecipeComponent,
    RecipeCardComponent,
    PhotoCardComponent
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
    MatListModule,
    MatCardModule,
    FileUploadModule
  ],
  providers: [
    SessionService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
