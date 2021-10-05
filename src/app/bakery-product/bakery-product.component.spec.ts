import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryProductComponent } from './bakery-product.component';

describe('BakeryProductComponent', () => {
  let component: BakeryProductComponent;
  let fixture: ComponentFixture<BakeryProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
