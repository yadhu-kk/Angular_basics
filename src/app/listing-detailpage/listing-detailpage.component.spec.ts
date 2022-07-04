import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailpageComponent } from './listing-detailpage.component';

describe('ListingDetailpageComponent', () => {
  let component: ListingDetailpageComponent;
  let fixture: ComponentFixture<ListingDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
