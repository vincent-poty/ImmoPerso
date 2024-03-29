import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppartLocataireComponent } from './appart-locataire/appart-locataire.component';
import { AppLocataireListComponent } from './app-locataire-list/app-locataire-list.component';
import { SingleAppLocComponent } from './single-app-loc/single-app-loc.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerEncodeComponent } from './owner-encode/owner-encode.component';
import { FormsModule } from '@angular/forms';
import { DoBootstrap } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    AppartLocataireComponent,
    AppLocataireListComponent,
    SingleAppLocComponent,
    OwnerEncodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
