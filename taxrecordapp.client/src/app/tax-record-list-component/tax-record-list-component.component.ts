import { Component, OnInit } from '@angular/core';
import { TaxRecord, TaxRecordService } from '../services/tax-record.service';

@Component({
  selector: 'app-tax-record-list-component',
  templateUrl: './tax-record-list-component.component.html',
  styleUrls: ['./tax-record-list-component.component.css']
})
export class TaxRecordListComponentComponent implements OnInit{
  taxRecords: TaxRecord[] = [];
  filteredTaxRecords: TaxRecord[] = [];
  errorMessage: string = '';

  constructor(private taxRecordService: TaxRecordService) { }

  ngOnInit(): void {
    this.loadTaxRecords();
  }
  loadTaxRecords(): void {
    this.taxRecordService.getTaxRecords().subscribe({
      next: (data) => {
        this.taxRecords = data;
        this.filteredTaxRecords = data;
      },
      error: (error) => this.errorMessage = error
    });
  }

  filterRecords(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredTaxRecords = this.taxRecords;
      return;
    }
    this.filteredTaxRecords = this.taxRecords.filter(record =>
      record.recordTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  deleteRecord(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.taxRecordService.deleteTaxRecord(id).subscribe({
        next: () => {
          this.taxRecords = this.taxRecords.filter(record => record.id !== id);
          this.filteredTaxRecords = this.filteredTaxRecords.filter(record => record.id !== id);
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete tax record.';
          console.error(err);
        }
      });
    }
  }

}
