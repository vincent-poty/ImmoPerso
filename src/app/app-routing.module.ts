import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLocataireListComponent } from './app-locataire-list/app-locataire-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleAppLocComponent } from './single-app-loc/single-app-loc.component';

const routes: Routes = [
  { path: 'immoLocataire/:id', component: SingleAppLocComponent},
  { path: '', component: LandingPageComponent},
  { path:'immoLocataire', component: AppLocataireListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
