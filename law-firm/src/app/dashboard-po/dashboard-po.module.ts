import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPoComponent } from './/dashboard-po.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardPoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NewCaseModule { }
