import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothPasteProductComponent } from './tooth-paste-product.component';

describe('ToothPasteProductComponent', () => {
  let component: ToothPasteProductComponent;
  let fixture: ComponentFixture<ToothPasteProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToothPasteProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothPasteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
