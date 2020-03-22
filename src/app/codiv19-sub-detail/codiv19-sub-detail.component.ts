import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-codiv19-sub-detail',
  templateUrl: './codiv19-sub-detail.component.html',
  styleUrls: ['./codiv19-sub-detail.component.css']
})
export class Codiv19SubDetailComponent implements OnInit {

  @Input() countryName: string = "";
  @Input() selectedCountryName: string = "";

  @Output() removeSelectedCountryName = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {

    this.removeSelectedCountryName.emit();
  }

}
