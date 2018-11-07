import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactImageDetailComponent } from './contact-image-detail.component';

describe('ContactImageDetailComponent', () => {
  let component: ContactImageDetailComponent;
  let fixture: ComponentFixture<ContactImageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactImageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
