import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampletest3Component } from './sampletest3.component';

describe('Sampletest3Component', () => {
  let component: Sampletest3Component;
  let fixture: ComponentFixture<Sampletest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampletest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampletest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
