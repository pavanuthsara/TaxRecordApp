import { Component, OnInit } from '@angular/core';
import { TaxRecord, TaxRecordService } from '../services/tax-record.service';

@Component({
  selector: 'app-tax-record-list-component',
  templateUrl: './tax-record-list-component.component.html',
  styleUrls: ['./tax-record-list-component.component.css']
})
export class TaxRecordListComponentComponent implements OnInit{
  taxRecords: TaxRecord[] = [];
  errorMessage: string = '';

  constructor(private taxRecordService: TaxRecordService) { }

  ngOnInit(): void {
    this.loadTaxRecords();
  }
  loadTaxRecords(): void {
    this.taxRecordService.getTaxRecords().subscribe({
      next: (data) => this.taxRecords = data,
      error: (error) => this.errorMessage = error
    });
  }

}
