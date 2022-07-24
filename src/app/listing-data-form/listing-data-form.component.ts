import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';
@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.scss'],
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName = '';
  @Input() currentPrice = '';
  id: string = '';
  name: string = '';
  price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.price = this.currentPrice;
  }
  onButtonClicked(): void {
    this.onSubmit.emit({
      id: this.id,
      name: this.name,
      price: Number(this.price),
    });
    this.router.navigateByUrl('/mylistings');
  }
}
