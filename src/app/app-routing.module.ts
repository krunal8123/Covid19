import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoronavirusComponent } from "./coronavirus/coronavirus.component";

const routes: Routes = [
  { path: "", redirectTo: "coronavirus", pathMatch: "full" },
  { path: "coronavirus", component: CoronavirusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
