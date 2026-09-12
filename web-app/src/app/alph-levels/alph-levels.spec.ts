import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlphLevels } from './alph-levels';

describe('AlphLevels', () => {
  let component: AlphLevels;
  let fixture: ComponentFixture<AlphLevels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphLevels],
    }).compileComponents();

    fixture = TestBed.createComponent(AlphLevels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
