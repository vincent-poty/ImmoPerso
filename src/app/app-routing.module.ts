import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLocataireListComponent } from './app-locataire-list/app-locataire-list.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwnerEncodeComponent } from './owner-encode/owner-encode.component';
import { SingleAppLocComponent } from './single-app-loc/single-app-loc.component';

const routes: Routes = [
  { path: 'immoLocataire/:id', component: SingleAppLocComponent},
  { path: '', component: LandingPageComponent},
  { path:'immoLocataire', component: AppLocataireListComponent, canActivate: [AuthGuard]},
  { path:'OwnerEncoded', component: OwnerEncodeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
