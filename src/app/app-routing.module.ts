import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';

const routes: Routes = [{ path: '', component:ViewbooksComponent}];
const route: Routes = [{ path: 'addbook', component:AddbookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
