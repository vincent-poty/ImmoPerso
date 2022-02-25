import { Component, Input, OnInit } from '@angular/core';
import { AppLoc } from '../models/appLoc.model';

@Component({
  selector: 'app-appart-locataire',
  templateUrl: './appart-locataire.component.html',
  styleUrls: ['./appart-locataire.component.scss']
})
export class AppartLocataireComponent implements OnInit {
@Input() appLoc!: AppLoc;

  constructor() { }

  ngOnInit(): void {
  }

}
