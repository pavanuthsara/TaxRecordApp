import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRecordFormComponentComponent } from './tax-record-form-component.component';

describe('TaxRecordFormComponentComponent', () => {
  let component: TaxRecordFormComponentComponent;
  let fixture: ComponentFixture<TaxRecordFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxRecordFormComponentComponent]
    });
    fixture = TestBed.createComponent(TaxRecordFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
