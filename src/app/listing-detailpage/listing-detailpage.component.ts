import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake.data';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-detailpage',
  templateUrl: './listing-detailpage.component.html',
  styleUrls: ['./listing-detailpage.component.scss'],
})
export class ListingDetailpageComponent implements OnInit {
  listing: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
  }
}
