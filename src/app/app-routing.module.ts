import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLocataireListComponent } from './app-locataire-list/app-locataire-list.component';
import { AppartLocataireComponent } from './appart-locataire/appart-locataire.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path:'immoLocataire', component: AppLocataireListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
