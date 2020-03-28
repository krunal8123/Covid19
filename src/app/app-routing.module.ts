import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoronavirusComponent } from "./coronavirus/coronavirus.component";
import { Codiv19SubDetailComponent } from './codiv19-sub-detail/codiv19-sub-detail.component';

const routes: Routes = [
  { path: "", redirectTo: "coronavirus", pathMatch: "full" },
  { path: "coronavirus", component: CoronavirusComponent },
  {
    path: 'Country/:countryName',
    component: Codiv19SubDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
