import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaxRecordListComponentComponent } from './tax-record-list-component/tax-record-list-component.component';
import { TaxRecordFormComponentComponent } from './tax-record-form-component/tax-record-form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TaxRecordListComponentComponent },
  { path: 'add', component: TaxRecordFormComponentComponent },
  { path: 'edit/:id', component: TaxRecordFormComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaxRecordListComponentComponent,
    TaxRecordFormComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
