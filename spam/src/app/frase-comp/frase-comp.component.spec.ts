import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraseCompComponent } from './frase-comp.component';

describe('FraseCompComponent', () => {
  let component: FraseCompComponent;
  let fixture: ComponentFixture<FraseCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraseCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
