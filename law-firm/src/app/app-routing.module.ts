import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPoComponent } from './dashboard-po/dashboard-po.component';
import { NewCaseComponent } from './new-case/new-case.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard-po', component: DashboardPoComponent},
  {path: 'new-case', component: NewCaseComponent},
  {path: 'new-client', component: NewClientComponent},
  {path: 'client/:id', component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule { }
