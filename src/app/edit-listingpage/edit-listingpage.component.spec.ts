import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListingpageComponent } from './edit-listingpage.component';

describe('EditListingpageComponent', () => {
  let component: EditListingpageComponent;
  let fixture: ComponentFixture<EditListingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
