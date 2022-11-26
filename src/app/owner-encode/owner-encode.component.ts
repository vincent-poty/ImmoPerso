import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppLocService } from '../service/appLoc.service';
import { Location } from '@angular/common';
import { Rent } from '../service/rent';



@Component({
  selector: 'app-owner-encode',
  templateUrl: './owner-encode.component.html',
  styleUrls: ['./owner-encode.component.scss']
})
export class OwnerEncodeComponent implements OnInit {

  rent: Rent = new Rent();

  constructor(
    private router: Router,
    private appLocService: AppLocService,
    private location: Location) { }

  ngOnInit(): void {
    
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.rent) {
      this.appLocService.addRent(<Rent>this.rent)
        .subscribe(() => this.goBack());
    }
  }
}
