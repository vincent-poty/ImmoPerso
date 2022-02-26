import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLoc } from '../models/appLoc.model';

@Component({
  selector: 'app-appart-locataire',
  templateUrl: './appart-locataire.component.html',
  styleUrls: ['./appart-locataire.component.scss']
})
export class AppartLocataireComponent implements OnInit {
@Input() appLoc!: AppLoc;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    versDetails(): void{
      this.router.navigateByUrl('immoLocataire/:id');
    }
  }

