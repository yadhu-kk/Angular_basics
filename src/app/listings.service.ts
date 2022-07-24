import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Listing } from './types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  constructor(private http: HttpClient) {}
  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }
}
