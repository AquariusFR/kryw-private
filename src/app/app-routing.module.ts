import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FortniteMapsComponent } from './fortnite/maps/maps.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fortnite/maps' },
  { path: 'fortnite/maps', component: FortniteMapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
