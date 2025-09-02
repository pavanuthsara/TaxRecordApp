import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRecordListComponentComponent } from './tax-record-list-component.component';

describe('TaxRecordListComponentComponent', () => {
  let component: TaxRecordListComponentComponent;
  let fixture: ComponentFixture<TaxRecordListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxRecordListComponentComponent]
    });
    fixture = TestBed.createComponent(TaxRecordListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
