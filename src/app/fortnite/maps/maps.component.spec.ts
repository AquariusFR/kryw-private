import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteMapsComponent } from './maps.component';

describe('MapsComponent', () => {
  let component: FortniteMapsComponent;
  let fixture: ComponentFixture<FortniteMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortniteMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
