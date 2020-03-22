import { Component, OnInit } from "@angular/core";
import { Covid19Service } from "../Services/covid19.service";
import { Corona } from "../models/corona";
@Component({
  selector: "app-coronavirus",
  templateUrl: "./coronavirus.component.html",
  styleUrls: ["./coronavirus.component.css"]
})
export class CoronavirusComponent implements OnInit {
  displayedColumns = [
    "country_name",
    "cases",
    "new_cases",
    "deaths",
    "new_deaths",
    "total_recovered",
    "active_cases",
    "serious_critical",
    "total_cases_per_1m_population"
  ];
  dataSource: Corona[] = [];
  constructor(private Covid19Service: Covid19Service) {}

  ngOnInit() {
    this.GetCasesByCountry();
  }
  GetCasesByCountry() {
    this.Covid19Service.GetCasesByCountry().subscribe((data: any) => {
      this.dataSource = data.countries_stat.map(result =>
        Object.assign(new Corona(), result)
      );
    });
  }
}
