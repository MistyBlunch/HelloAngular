import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibolistaComponent } from './fibolista.component';

describe('FibolistaComponent', () => {
  let component: FibolistaComponent;
  let fixture: ComponentFixture<FibolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
