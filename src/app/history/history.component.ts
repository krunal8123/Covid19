import { Component, OnInit, Input, Output } from '@angular/core';
import { Covid19Service } from '../Services/covid19.service';
import { History } from '../models/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input() countryName: string = "";
  @Input() CurrentCountryName: string = "";

  historyData: History[] = [];

  constructor(private Covid19Service: Covid19Service) { }

  ngOnChanges(changes){

    if(this.countryName != this.CurrentCountryName &&
      this.countryName.length > 0){

        this.GetHistoryByParticularCountry();
      }
  }

  GetHistoryByParticularCountry() {
    this.Covid19Service.GetHistoryByParticularCountry(this.countryName).subscribe((data: any) => {
      this.historyData = data.stat_by_country.map(result =>
        Object.assign(new History(), result)
      );
    });
  }

  ngOnInit() {
  }


}
