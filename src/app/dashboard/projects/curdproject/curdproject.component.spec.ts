import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdprojectComponent } from './curdproject.component';

describe('CurdprojectComponent', () => {
  let component: CurdprojectComponent;
  let fixture: ComponentFixture<CurdprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
