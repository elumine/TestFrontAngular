import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesScreenComponent } from './categories.component';

describe('CategoriesScreenComponent', () => {
  let component: CategoriesScreenComponent;
  let fixture: ComponentFixture<CategoriesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
