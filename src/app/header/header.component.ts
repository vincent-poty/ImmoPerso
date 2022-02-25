import { Component, OnInit } from '@angular/core';
import { AppLoc } from '../models/appLoc.model';
import { AppLocService } from '../service/appLoc.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appLocs!: AppLoc[];
  constructor(private appLocService: AppLocService) { }

  ngOnInit(): void {
    this.appLocs = this.appLocService.getAllAppLocs();
  }

}
