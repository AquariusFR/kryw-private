import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteMapComponent } from './map.component';

describe('MapComponent', () => {
  let component: FortniteMapComponent;
  let fixture: ComponentFixture<FortniteMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortniteMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortniteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
