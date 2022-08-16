import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-two',
  templateUrl: './charts-two.component.html',
  styleUrls: ['./charts-two.component.scss']
})
export class ChartsTwoComponent implements OnInit {
  data = {
    chart: {
      caption: "Top 5 countries with Global Oil Reserves",
      subcaption: "MMbbl= One Million barrels",
      enablesmartlabels: "1",
      showlabels: "1",
      numbersuffix: " MMbbl",
      usedataplotcolorforlabels: "1",
      plottooltext: "$label, <b>$value</b> MMbbl",
      theme: "fusion"
    },
    data: [
      {
        label: "Venezuela",
        value: "290"
      },
      {
        label: "Saudi",
        value: "260"
      },
      {
        label: "Canada",
        value: "180"
      },
      {
        label: "Iran",
        value: "140"
      },
      {
        label: "Russia",
        value: "115"
      }
    ]
  };
  type = "doughnut3d";
  dataFormat = "json";
  dataSource = this.data;
  constructor() {

  }

  ngOnInit(): void {
  }

}
