import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddservicerequetsComponent } from './addservicerequets.component';

describe('AddservicerequetsComponent', () => {
  let component: AddservicerequetsComponent;
  let fixture: ComponentFixture<AddservicerequetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddservicerequetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicerequetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
