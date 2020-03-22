import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpBackend
} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Corona } from "../models/corona";

@Injectable({
  providedIn: "root"
})
export class Covid19Service {
  api: string = environment.API;
  X_RAPIDAPI_HOST: string = environment.X_RAPIDAPI_HOST;
  X_RAPIDAPI_KEY: string = environment.X_RAPIDAPI_KEY;

  constructor(private HttpClient: HttpClient) {}

  GetCasesByCountry() {
    let header = new HttpHeaders()
      .set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e"
      );
    return this.HttpClient.get(this.api + "cases_by_country.php", {
      headers: header
    });
  }

  async GetAffectedCountries() {
    let header = new HttpHeaders()
      .set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e"
      );

    this.HttpClient.get(this.api + "affected.php", {
      headers: header
    }).subscribe(async (data: any) => {
      console.log(data);
      return await data;
    });
  }

  async GetHistoryByParticularCountry(CountryName: string) {
    let param: HttpParams = new HttpParams().set("country", CountryName);

    let header = new HttpHeaders()
      .set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e"
      );

    this.HttpClient.get(this.api + "cases_by_particular_country.php", {
      headers: header,
      params: param
    }).subscribe(async (data: any) => {
      console.log(data);
      return await data;
    });
  }

  async GetLatestStatusByCountry(CountryName: string) {
    let param: HttpParams = new HttpParams().set("country", CountryName);

    let header = new HttpHeaders()
      .set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com")
      .set(
        "x-rapidapi-key",
        "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e"
      );

    this.HttpClient.get(this.api + "latest_stat_by_country.php", {
      headers: header,
      params: param
    }).subscribe(async (data: any) => {
      console.log(data);
      return await data;
    });
  }
}
