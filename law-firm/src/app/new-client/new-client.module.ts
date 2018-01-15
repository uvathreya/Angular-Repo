import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewClientComponent } from './/new-client.component';
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
    NewClientComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NewClientModule { }
