import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
export interface TaxRecord {
  id: number;
  recordTitle: string;
  taxYear: number;
  incomeAmout: number;
  deductionsAmount: number;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaxRecordService {
  //base url of .NET core api
  private readonly apiUrl = 'https://localhost:7225/api/TaxRecords';

  constructor(private http: HttpClient) { }

  //get all tax records
  getTaxRecords(): Observable<TaxRecord[]> {
    return this.http.get<TaxRecord[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single tax record by ID
  getTaxRecord(id: number): Observable<TaxRecord> {
    return this.http.get<TaxRecord>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new tax record
  createTaxRecord(taxRecord: TaxRecord): Observable<TaxRecord> {
    return this.http.post<TaxRecord>(this.apiUrl, taxRecord).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing tax record
  updateTaxRecord(id: number, taxRecord: TaxRecord): Observable<TaxRecord> {
    return this.http.put<TaxRecord>(`${this.apiUrl}/${id}`, taxRecord).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a tax record by ID
  deleteTaxRecord(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  //error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }


}
