import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLoc } from '../models/appLoc.model';
import { AppLocService } from '../service/appLoc.service';
import { Location } from '@angular/common';
import { Rent } from '../service/rent';

@Component({
  selector: 'app-app-locataire-list',
  templateUrl: './app-locataire-list.component.html',
  styleUrls: ['./app-locataire-list.component.scss']
})
export class AppLocataireListComponent implements OnInit {

  rents: Rent[] = [];

  constructor(private appLocService: AppLocService) { }

  ngOnInit(): void {
   this.appLocService.getRents().subscribe(rents => this.rents = rents);
  }

}
