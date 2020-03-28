import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-codiv19-sub-detail',
  templateUrl: './codiv19-sub-detail.component.html',
  styleUrls: ['./codiv19-sub-detail.component.css']
})
export class Codiv19SubDetailComponent implements OnInit {

  countryName:string="";

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.countryName = params.get('countryName');
    });
  }

  close() {
    this.router.navigate(["coronavirus"]);
  }

}
