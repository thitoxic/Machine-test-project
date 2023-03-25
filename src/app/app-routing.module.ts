import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IndiaComponent } from './india/india.component';
const routes: Routes = [
  {
    component: HomepageComponent,
    path: ''
  },
  {
    component: IndiaComponent,
    path: 'india'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
