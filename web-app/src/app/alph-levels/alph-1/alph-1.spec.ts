import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alph1 } from './alph-1';

describe('Alph1', () => {
  let component: Alph1;
  let fixture: ComponentFixture<Alph1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alph1],
    }).compileComponents();

    fixture = TestBed.createComponent(Alph1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
