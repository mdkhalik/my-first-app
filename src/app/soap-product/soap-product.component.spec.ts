import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapProductComponent } from './soap-product.component';

describe('SoapProductComponent', () => {
  let component: SoapProductComponent;
  let fixture: ComponentFixture<SoapProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
