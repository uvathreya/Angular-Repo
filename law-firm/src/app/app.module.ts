import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardPoComponent } from './dashboard-po/dashboard-po.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { NewClientComponent } from './new-client/new-client.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: 'dashboard-po', component: DashboardPoComponent},
  {path: 'new-case', component: NewCaseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPoComponent,
    NewCaseComponent,
    NewClientComponent,
    FormGroupDirective,
    CaseComponent,
    ClientComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
