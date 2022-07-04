import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistingsPageComponent } from './newlistings-page.component';

describe('NewlistingsPageComponent', () => {
  let component: NewlistingsPageComponent;
  let fixture: ComponentFixture<NewlistingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlistingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
