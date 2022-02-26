import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-app-loc',
  templateUrl: './single-app-loc.component.html',
  styleUrls: ['./single-app-loc.component.scss']
})
export class SingleAppLocComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void{
    this.router.navigateByUrl('immoLocataire/:id');
  }
}
