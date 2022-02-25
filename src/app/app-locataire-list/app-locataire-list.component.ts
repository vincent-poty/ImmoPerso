import { Component, OnInit } from '@angular/core';
import { AppLoc } from '../models/appLoc.model';
import { AppLocService } from '../service/appLoc.service';

@Component({
  selector: 'app-app-locataire-list',
  templateUrl: './app-locataire-list.component.html',
  styleUrls: ['./app-locataire-list.component.scss']
})
export class AppLocataireListComponent implements OnInit {

  appLocs!: AppLoc[];

  constructor(private appLocService: AppLocService) { }

  ngOnInit(): void {
    this.appLocs = this.appLocService.getAllAppLocs();
  }


}
