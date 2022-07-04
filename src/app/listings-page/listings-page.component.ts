import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake.data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.scss'],
})
export class ListingsPageComponent implements OnInit {
  Listings: Listing[] = [];
  constructor() {}

  ngOnInit(): void {
    this.Listings = fakeListings;
  }
}
