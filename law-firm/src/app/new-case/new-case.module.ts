import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCaseComponent } from './/new-case.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    NewCaseComponent,
    FormGroupDirective,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class NewClientModule { }
