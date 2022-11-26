import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoc } from '../models/appLoc.model';
import { AppLocService } from '../service/appLoc.service';
import { Rent } from '../service/rent';


@Component({
  selector: 'app-appart-locataire',
  templateUrl: './appart-locataire.component.html',
  styleUrls: ['./appart-locataire.component.scss']
})
export class AppartLocataireComponent implements OnInit {
  //@Input() currentRent!: AppLoc;
  // rents: Rent[] = [];
  rents: Rent = new Rent();

  constructor(private appLocservice: AppLocService,
    private router: Router) { }

  ngOnInit(): void {
   // this.rents = this.appLocservice.getRents();
  }
  versDetails(): void {
    this.router.navigateByUrl('immoLocataire/:id');
  }
}

