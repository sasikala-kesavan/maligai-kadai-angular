import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const allRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
imports: [
  RouterModule.forRoot(allRoutes)
],
exports:[RouterModule]
})

export class AppRoutingModule {
}
