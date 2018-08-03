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
import { FileSelectDirective } from "ng2-file-upload";
import { SessionService } from './services/session.service';
import { RecipesService } from './services/recipes.service';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmComponent,
    HomeComponent,
    PhotoUploadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SessionService,
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
