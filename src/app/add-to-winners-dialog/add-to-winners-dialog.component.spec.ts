import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToWinnersDialogComponent } from './add-to-winners-dialog.component';

describe('AddToWinnersDialogComponent', () => {
  let component: AddToWinnersDialogComponent;
  let fixture: ComponentFixture<AddToWinnersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToWinnersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToWinnersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
