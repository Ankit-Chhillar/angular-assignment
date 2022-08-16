import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-one',
  templateUrl: './charts-one.component.html',
  styleUrls: ['./charts-one.component.scss']
})


export class ChartsOneComponent implements OnInit {

  dataSource1: Object;
  dataSource2: Object;
  dataSource3: Object;

/////////////////////////////////////////////////////

  constructor() {

    const chartData1 = [
      {
        label: "Ice Cream Sandwich",
        value: "1000"
      },
      {
        label: "Jelly Bean",
        value: "5300"
      },
      {
        label: "Kitkat",
        value: "10500"
      },
      {
        label: "Lollipop",
        value: "18900"
      },
      {
        label: "Marshmallow",
        value: "17904"
      }
    ]

    /////////////////////////////////////////////////////

    const chartData2 = [
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
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "30"
      },
      {
        label: "China",
        value: "30"
      }
    ];

    /////////////////////////////////////////////////////

    const chartData3 = [
      {
        label: "1994",
        value: "15622"
      },
      {
        label: "1995",
        value: "10612"
      },
      {
        label: "1996",
        value: "15820"
      },
      {
        label: "1997",
        value: "26723"
      },
      {
        label: "1998",
        value: "35415"
      },
      {
        label: "1999",
        value: "25555"
      },
      {
        label: "2000",
        value: "81803"
      },
      {
        label: "2001",
        value: "47950"
      },
      {
        label: "2002",
        value: "42396"
      },
      {
        label: "2003",
        value: "19435"
      },
      {
        label: "2004",
        value: "9780"
      },
      {
        label: "2005",
        value: "23243"
      },
      {
        label: "2006",
        value: "8477"
      },
      {
        label: "2007",
        value: "3503"
      },
      {
        label: "2008",
        value: "14278"
      },
      {
        label: "2009",
        value: "30522"
      },
      {
        label: "2010",
        value: "61518"
      },
      {
        label: "2011",
        value: "24819"
      },
      {
        label: "2012",
        value: "16437"
      },
      {
        label: "2013",
        value: "21171"
      },
      {
        label: "2014",
        value: "1690"
      },
      {
        label: "2015",
        value: "2418"
      },
      {
        label: "2016",
        value: "11253"
      },
      {
        label: "2017",

      }
    ];

    /////////////////////////////////////////////////////

    const dataSource1 = {
      chart: {
        caption: "Android Distribution for our app",
        subcaption: "For all users in 2017",
        showpercentvalues: "1",
        defaultcenterlabel: "Android Distribution",
        aligncaptionwithcanvas: "0",
        captionpadding: "0",
        decimals: "1",
        plottooltext:"<b>$percentValue</b> of our Android users are on <b>$label</b>",
        centerlabel: "# Users: $value",
        theme: "fusion"
      },
      data: chartData1
    };

    /////////////////////////////////////////////////////

    const dataSource2 = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      data: chartData2
    };

    /////////////////////////////////////////////////////

    const dataSource3 = {
      chart: {
        caption: "Deaths reported because of mosquito bites in India",
        subcaption: "(As per government records)",
        showvalues: "0",
        numvisibleplot: "12",
        plottooltext:
          "<b>$dataValue</b> people died because of mosquito bites in $label",
        theme: "fusion"
      },
      categories: [
        {
          category: [
            {
              label: "1994"
            },
            {
              label: "1995"
            },
            {
              label: "1996"
            },
            {
              label: "1997"
            },
            {
              label: "1998"
            },
            {
              label: "1999"
            },
            {
              label: "2000"
            },
            {
              label: "2001"
            },
            {
              label: "2002"
            },
            {
              label: "2003"
            },
            {
              label: "2004"
            },
            {
              label: "2005"
            },
            {
              label: "2006"
            },
            {
              label: "2007"
            },
            {
              label: "2008"
            },
            {
              label: "2009"
            },
            {
              label: "2010"
            },
            {
              label: "2011"
            },
            {
              label: "2012"
            },
            {
              label: "2013"
            },
            {
              label: "2014"
            },
            {
              label: "2015"
            },
            {
              label: "2016"
            },
            {
              label: "2017"
            }
          ]
        }
      ],
      dataset: [
        {
          data: [
            {
              value: "15622"
            },
            {
              value: "10612"
            },
            {
              value: "15820"
            },
            {
              value: "26723"
            },
            {
              value: "35415"
            },
            {
              value: "25555"
            },
            {
              value: "81803"
            },
            {
              value: "47950"
            },
            {
              value: "42396"
            },
            {
              value: "19435"
            },
            {
              value: "9780"
            },
            {
              value: "23243"
            },
            {
              value: "28619"
            },
            {
              value: "8477"
            },
            {
              value: "3503"
            },
            {
              value: "14278"
            },
            {
              value: "30522"
            },
            {
              value: "61518"
            },
            {
              value: "24819"
            },
            {
              value: "16437"
            },
            {
              value: "21171"
            },
            {
              value: "1690"
            },
            {
              value: "2418"
            },
            {
              value: "11253"
            }
          ]
        }
      ]
    };

    ////////////////////////////////////////////////////

    this.dataSource1 = dataSource1;
    this.dataSource2 = dataSource2;
    this.dataSource3 = dataSource3;
  }


  ngOnInit(): void {
  }
}
