import { ComponentFixture, TestBed } from '@angular/core/testing';

import { formsComponent } from './forms.component';

describe('formsComponent', () => {
  let component: formsComponent;
  let fixture: ComponentFixture<formsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [formsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(formsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
