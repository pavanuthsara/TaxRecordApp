import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaxRecordListComponentComponent } from './tax-record-list-component/tax-record-list-component.component';
import { TaxRecordFormComponentComponent } from './tax-record-form-component/tax-record-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaxRecordListComponentComponent,
    TaxRecordFormComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
