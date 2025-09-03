import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxRecordService, TaxRecord } from '../services/tax-record.service';

@Component({
  selector: 'app-tax-record-form-component',
  templateUrl: './tax-record-form-component.component.html',
  styleUrls: ['./tax-record-form-component.component.css']
})
export class TaxRecordFormComponentComponent implements OnInit{
  taxRecordForm: FormGroup;
  isEditMode = false;
  recordId: number | null = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private taxRecordService: TaxRecordService,
    private route: ActivatedRoute,
    public router: Router
  ) {
    this.taxRecordForm = this.fb.group({
      recordTitle: ['', Validators.required],
      taxYear: ['', [Validators.required, Validators.min(1900), Validators.max(9999)]],
      incomeAmount: ['', [Validators.required, Validators.min(0)]],
      deductionsAmount: ['', [Validators.required, Validators.min(0)]],
      notes: ['']
    });
  }

  ngOnInit(): void {
    // Check if we're in edit mode by looking for an ID in the route
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.recordId = +id;
        this.loadTaxRecord(this.recordId);
      }
    });
  }

  private loadTaxRecord(id: number): void {
    this.taxRecordService.getTaxRecord(id).subscribe({
      next: (record) => {
        this.taxRecordForm.patchValue({
          recordTitle: record.recordTitle,
          taxYear: record.taxYear,
          incomeAmount: record.incomeAmount,
          deductionsAmount: record.deductionsAmount,
          notes: record.notes || ''
        });
      },
      error: (err) => {
        this.errorMessage = 'Failed to load tax record. Please try again.';
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.taxRecordForm.invalid) {
      this.taxRecordForm.markAllAsTouched();
      return;
    }

    const taxRecord: TaxRecord = {
      id: this.isEditMode ? this.recordId! : 0, // ID is ignored for create
      recordTitle: this.taxRecordForm.get('recordTitle')!.value,
      taxYear: this.taxRecordForm.get('taxYear')!.value,
      incomeAmount: this.taxRecordForm.get('incomeAmount')!.value,
      deductionsAmount: this.taxRecordForm.get('deductionsAmount')!.value,
      notes: this.taxRecordForm.get('notes')!.value || null
    };

    if (this.isEditMode) {
      this.taxRecordService.updateTaxRecord(this.recordId!, taxRecord).subscribe({
        next: () => {
          this.successMessage = 'Tax record updated successfully!';
          this.errorMessage = '';
          setTimeout(() => this.router.navigate(['/']), 2000); // Redirect to list after 2s
        },
        error: (err) => {
          this.errorMessage = 'Failed to update tax record. Please try again.';
          console.error(err);
        }
      });
    } else {
      this.taxRecordService.createTaxRecord(taxRecord).subscribe({
        next: () => {
          this.successMessage = 'Tax record created successfully!';
          this.errorMessage = '';
          this.taxRecordForm.reset();
          setTimeout(() => this.router.navigate(['/']), 2000); // Redirect to list after 2s
        },
        error: (err) => {
          this.errorMessage = 'Failed to create tax record. Please try again.';
          console.error(err);
        }
      });
    }
  }

  get f(): any {
    return this.taxRecordForm.controls;
  }
}
