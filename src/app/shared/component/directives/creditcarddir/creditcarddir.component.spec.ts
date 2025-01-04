import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcarddirComponent } from './creditcarddir.component';

describe('CreditcarddirComponent', () => {
  let component: CreditcarddirComponent;
  let fixture: ComponentFixture<CreditcarddirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcarddirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcarddirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
