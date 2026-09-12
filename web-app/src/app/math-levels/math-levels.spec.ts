import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathLevels } from './math-levels';

describe('MathLevels', () => {
  let component: MathLevels;
  let fixture: ComponentFixture<MathLevels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathLevels],
    }).compileComponents();

    fixture = TestBed.createComponent(MathLevels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
