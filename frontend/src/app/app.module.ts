import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HngBarcodeModule } from 'hng-barcode';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarcodeComponent } from './components/barcode/barcode.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NoopAnimationsModule,
    HngBarcodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
