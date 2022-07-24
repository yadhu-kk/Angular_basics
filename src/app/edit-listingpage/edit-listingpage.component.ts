import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fakeListings } from '../fake.data';
import { Listing } from '../types';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-listingpage',
  templateUrl: './edit-listingpage.component.html',
  styleUrls: ['./edit-listingpage.component.scss'],
})
export class EditListingpageComponent implements OnInit {
  listing: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
  }
  onSubmit() {
    alert('saving changes. . .');
    this.router.navigateByUrl('/my-listings');
  }
}
