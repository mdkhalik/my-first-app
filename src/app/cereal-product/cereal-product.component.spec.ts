import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerealProductComponent } from './cereal-product.component';

describe('CerealProductComponent', () => {
  let component: CerealProductComponent;
  let fixture: ComponentFixture<CerealProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerealProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerealProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
