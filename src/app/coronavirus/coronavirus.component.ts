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
  constructor(private Covid19Service: Covid19Service) {}

  ngOnInit() {
    this.GetCasesByCountry();
    // this.dataSource.sort = this.sort;
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
    let data: any = this.dataSource.data.slice();
    if (!sort.active || sort.direction === "") {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === "asc";
      switch (sort.active) {
        case "name":
        // return compare(a.name, b.name, isAsc);
        case "calories":
        // return compare(a.calories, b.calories, isAsc);
        case "fat":
        // return compare(a.fat, b.fat, isAsc);
        case "carbs":
        // return compare(a.carbs, b.carbs, isAsc);
        case "protein":
        // return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
