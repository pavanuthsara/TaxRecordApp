import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaxRecord, TaxRecordService } from '../services/tax-record.service';

@Component({
  selector: 'app-tax-record-detail',
  templateUrl: './tax-record-detail.component.html',
  styleUrls: ['./tax-record-detail.component.css']
})
export class TaxRecordDetailComponent implements OnInit {
  record: TaxRecord | undefined;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taxRecordService: TaxRecordService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taxRecordService.getTaxRecord(+id).subscribe({
        next: (data) => this.record = data,
        error: (err) => {
          this.errorMessage = 'Could not load tax record.';
          console.error(err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
