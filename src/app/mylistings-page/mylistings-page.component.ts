import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake.data';
import { Listing } from '../types';

@Component({
  selector: 'app-mylistings-page',
  templateUrl: './mylistings-page.component.html',
  styleUrls: ['./mylistings-page.component.scss'],
})
export class MylistingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
  onDelete(listingId: string): void {
    alert(`deleting with your listing with id ${listingId}`);
  }
}
