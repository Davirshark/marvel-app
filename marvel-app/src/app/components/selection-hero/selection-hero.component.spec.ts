import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHeroComponent } from './selection-hero.component';

describe('SelectionHeroComponent', () => {
  let component: SelectionHeroComponent;
  let fixture: ComponentFixture<SelectionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
