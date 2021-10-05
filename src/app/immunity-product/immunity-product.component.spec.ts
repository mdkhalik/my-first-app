import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunityProductComponent } from './immunity-product.component';

describe('ImmunityProductComponent', () => {
  let component: ImmunityProductComponent;
  let fixture: ComponentFixture<ImmunityProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunityProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunityProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
