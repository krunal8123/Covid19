import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  api: string = environment.API;
  X_RAPIDAPI_HOST: string = environment.X_RAPIDAPI_HOST;
  X_RAPIDAPI_KEY: string = environment.X_RAPIDAPI_KEY;

  constructor(private HttpClient: HttpClient) { }

  async GetCasesByCountry() {

    let header = new HttpHeaders().set("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com").
    set("x-rapidapi-key", "cfe2855d40mshb45703d05279605p189c97jsnc368394faf8e");

    this.HttpClient.get(this.api + "cases_by_country.php", { headers: header }).subscribe(async (data: any) => {
      console.log(data);
      return await data;
    })
  }
}
