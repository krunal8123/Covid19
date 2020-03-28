import { Component, OnInit, Input } from '@angular/core';
import { Covid19Service } from '../Services/covid19.service';
import { LatestStatus } from '../models/latest-status';

@Component({
  selector: 'app-latest-status',
  templateUrl: './latest-status.component.html',
  styleUrls: ['./latest-status.component.css']
})
export class LatestStatusComponent implements OnInit {

  @Input() countryName: string = "";

  dataLoading = false;
  LatestStatus: LatestStatus[] = [];

  constructor(private Covid19Service: Covid19Service) { }

  ngOnChanges(changes) {

    if (this.countryName.length > 0) {

      this.GetLatestStatusByCountry();
    }
  }

  GetLatestStatusByCountry() {

    this.dataLoading = true;
    this.Covid19Service.GetLatestStatusByCountry(this.countryName).subscribe((data: any) => {
      this.dataLoading = true;
      this.LatestStatus = data.latest_stat_by_country.map(result =>
        Object.assign(new LatestStatus(), result)
      );
    }, (error) => {
      this.dataLoading = false;
    });
  }

  ngOnInit() {
  }

}
