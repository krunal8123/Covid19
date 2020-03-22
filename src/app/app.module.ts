import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { CoronavirusComponent } from "./coronavirus/coronavirus.component";
import { HistoryComponent } from "./history/history.component";
import { LatestStatusComponent } from "./latest-status/latest-status.component";
import { LatestStatusByCountryComponent } from "./latest-status-by-country/latest-status-by-country.component";
import { Codiv19SubDetailComponent } from "./codiv19-sub-detail/codiv19-sub-detail.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    CoronavirusComponent,
    HistoryComponent,
    LatestStatusComponent,
    LatestStatusByCountryComponent,
    Codiv19SubDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
