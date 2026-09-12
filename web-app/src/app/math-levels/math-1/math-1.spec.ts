import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Math1 } from './math-1';

describe('Math1', () => {
  let component: Math1;
  let fixture: ComponentFixture<Math1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math1],
    }).compileComponents();

    fixture = TestBed.createComponent(Math1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
