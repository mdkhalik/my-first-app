import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenProductComponent } from './kitchen-product.component';

describe('KitchenProductComponent', () => {
  let component: KitchenProductComponent;
  let fixture: ComponentFixture<KitchenProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
