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

import { SessionService } from './services/session.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
