import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoobarComponent } from './components/foobar/foobar.component';
import { FormLoginComponent } from './components/form/form-login/form-login.component';
import { FormRegisterComponent } from './components/form/form-register/form-register.component';
import { FormAdopcionComponent } from './components/form/form-adopcion/form-adopcion.component';
import { FormRescateComponent } from './components/form/form-rescate/form-rescate.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FoobarComponent,
    FormLoginComponent,
    FormRegisterComponent,
    FormAdopcionComponent,
    FormRescateComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
