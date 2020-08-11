import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyProductComponent } from './dairy-product.component';

describe('DairyProductComponent', () => {
  let component: DairyProductComponent;
  let fixture: ComponentFixture<DairyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
