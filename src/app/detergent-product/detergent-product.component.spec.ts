import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetergentProductComponent } from './detergent-product.component';

describe('DetergentProductComponent', () => {
  let component: DetergentProductComponent;
  let fixture: ComponentFixture<DetergentProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetergentProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetergentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
