import { Component, OnInit, ViewChild } from "@angular/core";
import { Covid19Service } from "../Services/covid19.service";
import { Corona } from "../models/corona";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material";
import { Sort } from "@angular/material/sort";

@Component({
  selector: "app-coronavirus",
  templateUrl: "./coronavirus.component.html",
  styleUrls: ["./coronavirus.component.css"]
})
export class CoronavirusComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
  dataLoading: boolean = true;
  dataSource = new MatTableDataSource([]);
  sortedData: any;
  constructor(private Covid19Service: Covid19Service) {}

  ngOnInit() {
    this.GetCasesByCountry();
  }
  GetCasesByCountry() {
    this.Covid19Service.GetCasesByCountry().subscribe((data: any) => {
      this.dataSource = data.countries_stat.map(result =>
        Object.assign(new Corona(), result)
      );
      this.sortedData = this.Covid19Service.copy(this.dataSource);
      this.dataLoading = false;
    });
  }
  sortData(sort: Sort) {
    let data: any = this.dataSource;
    if (!sort.active || sort.direction === "") {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "country_name":
          return compare(a.country_name, b.country_name, isAsc);
        case "cases":
          return compare(a.cases, b.cases, isAsc);
        case "new_cases":
          return compare(a.new_cases, b.new_cases, isAsc);
        case "deaths":
          return compare(a.deaths, b.deaths, isAsc);
        case "new_deaths":
          return compare(a.new_deaths, b.new_deaths, isAsc);
        case "total_recovered":
          return compare(a.total_recovered, b.total_recovered, isAsc);
        case "active_cases":
          return compare(a.active_cases, b.active_cases, isAsc);
        case "serious_critical":
          return compare(a.serious_critical, b.serious_critical, isAsc);
        case "total_cases_per_1m_population":
          return compare(
            a.total_cases_per_1m_population,
            b.total_cases_per_1m_population,
            isAsc
          );
        default:
          return 0;
      }
    });
    this.sortedData = this.Covid19Service.copy(this.dataSource);
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
