import { Component, OnInit, Input, Output } from "@angular/core";
import { Covid19Service } from "../Services/covid19.service";
import { History } from "../models/history";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"]
})
export class HistoryComponent implements OnInit {
  @Input() countryName: string = "";
  dataLoading: boolean = false;

  historyData: History[] = [];

  /////////////////////////////////////////////////////
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];
  /////////////////////////////////////////////////////

  constructor(private Covid19Service: Covid19Service) {
  }

  ngOnChanges(changes) {
    if ( this.countryName.length > 0) {
      this.GetHistoryByParticularCountry();
    }
  }

  GetHistoryByParticularCountry() {
    this.dataLoading = true;
    this.Covid19Service.GetHistoryByParticularCountry(
      this.countryName
    ).subscribe(
      (data: any) => {
        this.dataLoading = false;
        this.historyData = data.stat_by_country.map(result =>
          Object.assign(new History(), result)
        );
        console.log(this.historyData);
        if (this.historyData.length > 0) {
          // let firstRecord = new Date(
          //   this.historyData[0].record_date
          // ).toLocaleDateString("fr-CA");
          // let lastRecord = new Date(
          //   this.historyData[this.historyData.length - 1].record_date
          // ).toLocaleDateString("fr-CA");
          let newCases = [];
          let totalCases = [];
          let activeCases = [];
          let totalDeaths = [];
          let newDeaths = [];
          let totalRecovered = [];
          this.historyData.forEach(item => {
            this.lineChartLabels.push(item.record_date);
            newCases.push(item.new_cases);
            totalCases.push(item.total_cases);
            activeCases.push(item.active_cases);
            totalDeaths.push(item.total_deaths);
            newDeaths.push(item.new_deaths);
            totalRecovered.push(item.total_recovered);
          });
          let data = newCases;
          let totalcasesData = totalCases;
          let activeCasesData = activeCases;
          let totalDeathsData = totalDeaths;
          let newDeathsData = newDeaths;
          let totalRecoveredData = totalRecovered;
          this.lineChartData.push(
            {
              data: data,
              label: "New Cases for - " + this.countryName
            },
            {
              data: totalcasesData,
              label: "Total Cases for - " + this.countryName
            },
            {
              data: activeCasesData,
              label: "Active Cases for - " + this.countryName
            },
            {
              data: totalDeathsData,
              label: "Total Death Cases for - " + this.countryName
            },
            {
              data: newDeathsData,
              label: "New Deaths in - " + this.countryName
            },
            {
              data: totalRecoveredData,
              label: "Total Recovered Cases for - " + this.countryName
            }
          );
        }
      },
      error => {
        this.dataLoading = false;
      }
    );
  }

  ngOnInit() {}
}
