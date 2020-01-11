import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCategoryComponent } from './branch-category.component';

describe('BranchCategoryComponent', () => {
  let component: BranchCategoryComponent;
  let fixture: ComponentFixture<BranchCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
