import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpComponent } from './add-edit-emp.component';

describe('AddEditComponent', () => {
  let component: AddEditEmpComponent;
  let fixture: ComponentFixture<AddEditEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
