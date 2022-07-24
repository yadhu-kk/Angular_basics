import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newlistings-page',
  templateUrl: './newlistings-page.component.html',
  styleUrls: ['./newlistings-page.component.scss'],
})
export class NewlistingsPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(): void {
    alert('creating a new listing. . .');
    this.router.navigateByUrl('/mylistings');
  }
}
