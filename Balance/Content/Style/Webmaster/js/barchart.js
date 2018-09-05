
/*----------- Start amchart barchart 1 -----------*/

var chart = AmCharts.makeChart("chartdiv-1", {
    "type": "serial",
    "theme": "dark",
    "marginRight": 70,
    "dataProvider": [{
        "country": "USA",
        "visits": 3025,
        "color": "#FF0F00"
    }, {
        "country": "China",
        "visits": 1882,
        "color": "#FF6600"
    }, {
        "country": "Japan",
        "visits": 1809,
        "color": "#FF9E01"
    }, {
        "country": "Germany",
        "visits": 1322,
        "color": "#FCD202"
    }, {
        "country": "UK",
        "visits": 1122,
        "color": "#F8FF01"
    }, {
        "country": "France",
        "visits": 1114,
        "color": "#B0DE09"
    }, {
        "country": "India",
        "visits": 984,
        "color": "#04D215"
    }, {
        "country": "Spain",
        "visits": 711,
        "color": "#0D8ECF"
    }, {
        "country": "Netherlands",
        "visits": 665,
        "color": "#0D52D1"
    }, {
        "country": "Russia",
        "visits": 580,
        "color": "#2A0CD0"
    }, {
        "country": "South Korea",
        "visits": 443,
        "color": "#8A0CCF"
    }, {
        "country": "Canada",
        "visits": 441,
        "color": "#CD0D74"
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "title": "Visitors from country"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
    },
    "export": {
        "enabled": true
    }

});



/*----------- Start amchart barchart 2 -----------*/

var chart = AmCharts.makeChart("chartdiv-2", {
    "type": "serial",
    "theme": "dark",
    "dataProvider": [{
        "country": "USA",
        "visits": 2025
    }, {
        "country": "China",
        "visits": 1882
    }, {
        "country": "Japan",
        "visits": 1809
    }, {
        "country": "Germany",
        "visits": 1322
    }, {
        "country": "UK",
        "visits": 1122
    }, {
        "country": "France",
        "visits": 1114
    }, {
        "country": "India",
        "visits": 984
    }, {
        "country": "Spain",
        "visits": 711
    }, {
        "country": "Netherlands",
        "visits": 665
    }, {
        "country": "Russia",
        "visits": 580
    }, {
        "country": "South Korea",
        "visits": 443
    }, {
        "country": "Canada",
        "visits": 441
    }, {
        "country": "Brazil",
        "visits": 395
    }],
    "valueAxes": [{
        "gridColor": "#FFFFFF",
        "gridAlpha": 0.2,
        "dashLength": 0
    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "fillAlphas": 0.8,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "gridAlpha": 0,
        "tickPosition": "start",
        "tickLength": 20
    },
    "export": {
        "enabled": true
    }

});



/*----------- Start amchart barchart 3 -----------*/

var chart = AmCharts.makeChart("chartdiv-3", {
    "type": "serial",
    "addClassNames": true,
    "theme": "dark",
    "autoMargins": false,
    "marginLeft": 30,
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
        "adjustBorderColor": false,
        "horizontalPadding": 10,
        "verticalPadding": 8,
        "color": "#ffffff"
    },

    "dataProvider": [{
        "year": 2009,
        "income": 23.5,
        "expenses": 21.1
    }, {
        "year": 2010,
        "income": 26.2,
        "expenses": 30.5
    }, {
        "year": 2011,
        "income": 30.1,
        "expenses": 34.9
    }, {
        "year": 2012,
        "income": 29.5,
        "expenses": 31.1
    }, {
        "year": 2013,
        "income": 30.6,
        "expenses": 28.2,
        "dashLengthLine": 5
    }, {
        "year": 2014,
        "income": 34.1,
        "expenses": 32.9,
        "dashLengthColumn": 5,
        "alpha": 0.2,
        "additional": "(projection)"
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "alphaField": "alpha",
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        "fillAlphas": 1,
        "title": "Income",
        "type": "column",
        "valueField": "income",
        "dashLengthField": "dashLengthColumn"
    }, {
        "id": "graph2",
        "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
        "bullet": "round",
        "lineThickness": 3,
        "bulletSize": 7,
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "bulletBorderThickness": 3,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "title": "Expenses",
        "valueField": "expenses",
        "dashLengthField": "dashLengthLine"
    }],
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0
    },
    "export": {
        "enabled": true
    }
});




/*----------- Start amchart barchart 4 -----------*/

var chart = AmCharts.makeChart("chartdiv-4", {
    "type": "serial",
    "theme": "dark",
    "categoryField": "year",
    "rotate": true,
    "startDuration": 1,
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left"
    },
    "trendLines": [],
    "graphs": [{
            "balloonText": "Income:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": "Income",
            "type": "column",
            "valueField": "income"
        },
        {
            "balloonText": "Expenses:[[value]]",
            "fillAlphas": 0.8,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": "Expenses",
            "type": "column",
            "valueField": "expenses"
        }
    ],
    "guides": [],
    "valueAxes": [{
        "id": "ValueAxis-1",
        "position": "top",
        "axisAlpha": 0
    }],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [{
            "year": 2005,
            "income": 23.5,
            "expenses": 18.1
        },
        {
            "year": 2006,
            "income": 26.2,
            "expenses": 22.8
        },
        {
            "year": 2007,
            "income": 30.1,
            "expenses": 23.9
        },
        {
            "year": 2008,
            "income": 29.5,
            "expenses": 25.1
        },
        {
            "year": 2009,
            "income": 24.6,
            "expenses": 25
        }
    ],
    "export": {
        "enabled": true
    }

});




/*----------- Start amchart barchart 5 -----------*/

var chart = AmCharts.makeChart("chartdiv-5", {
    "type": "serial",
    "theme": "dark",
    "handDrawn": true,
    "handDrawScatter": 3,
    "legend": {
        "useGraphSettings": true,
        "markerSize": 12,
        "valueWidth": 0,
        "verticalGap": 0
    },
    "dataProvider": [{
        "year": 2005,
        "income": 23.5,
        "expenses": 18.1
    }, {
        "year": 2006,
        "income": 26.2,
        "expenses": 22.8
    }, {
        "year": 2007,
        "income": 30.1,
        "expenses": 23.9
    }, {
        "year": 2008,
        "income": 29.5,
        "expenses": 25.1
    }, {
        "year": 2009,
        "income": 24.6,
        "expenses": 25
    }],
    "valueAxes": [{
        "minorGridAlpha": 0.08,
        "minorGridEnabled": true,
        "position": "top",
        "axisAlpha": 0
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
        "title": "Income",
        "type": "column",
        "fillAlphas": 0.8,

        "valueField": "income"
    }, {
        "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "useLineColorForBulletBorder": true,
        "fillAlphas": 0,
        "lineThickness": 2,
        "lineAlpha": 1,
        "bulletSize": 7,
        "title": "Expenses",
        "valueField": "expenses"
    }],
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
        "enabled": true
    }

});



/*----------- Start amchart barchart 6 -----------*/
var chart = AmCharts.makeChart("chartdiv-6", {
    "type": "serial",
    "theme": "dark",
    "dataProvider": [{
        "name": "Damon",
        "points": 65456,
        "color": "#FEC514",
        // "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
    },  {
        "name": "Patrick",
        "points": 45524,
        "color": "#DB4C3C",
        // "bullet": "https://www.amcharts.com/lib/images/faces/D04.png"
    }, {
        "name": "John",
        "points": 35654,
        "color": "#7F8DA9",
        // "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
    }, {
        "name": "Mark",
        "points": 123654,
        "color": "#AE85C9",
        // "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
    }, {
        "name": "Patrick",
        "points": 49524,
        "color": "#DB4C3C",
        // "bullet": "https://www.amcharts.com/lib/images/faces/D04.png"
    }, {
        "name": "Patrick",
        "points": 40724,
        "color": "#DAF0FD",
        // "bullet": "https://www.amcharts.com/lib/images/faces/D03.png"
    }, {
        "name": "Damon",
        "points": 65456,
        "color": "#FEC514",
        // "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
    }, {
        "name": "Patrick",
        "points": 30724,
        "color": "#05BE17",
        // "bullet": "https://www.amcharts.com/lib/images/faces/D03.png"
    }, {
        "name": "Patrick",
        "points": 45524,
        "color": "#DB4C3C",
        // "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
    }, {
        "name": "Mark",
        "points": 13654,
        "color": "#DAF0FD",
        // "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
    }],
    "valueAxes": [{
        "maximum": 80000,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 4,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 10,
        "bulletSize": 52,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
        "enabled": true
    }
});



/*----------- Start amchart barchart 7 -----------*/

var chart = AmCharts.makeChart("chartdiv-7", {
    "type": "serial",
    "theme": "dark",
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
    "dataProvider": [{
        "date": "2012-01-01",
        "distance": 227,
        "townName": "New York",
        "townName2": "New York",
        "townSize": 25,
        "latitude": 40.71,
        "duration": 408
    }, {
        "date": "2012-01-02",
        "distance": 371,
        "townName": "Washington",
        "townSize": 14,
        "latitude": 38.89,
        "duration": 482
    }, {
        "date": "2012-01-03",
        "distance": 433,
        "townName": "Wilmington",
        "townSize": 6,
        "latitude": 34.22,
        "duration": 562
    }, {
        "date": "2012-01-04",
        "distance": 345,
        "townName": "Jacksonville",
        "townSize": 7,
        "latitude": 30.35,
        "duration": 379
    }, {
        "date": "2012-01-05",
        "distance": 480,
        "townName": "Miami",
        "townName2": "Miami",
        "townSize": 10,
        "latitude": 25.83,
        "duration": 501
    }, {
        "date": "2012-01-06",
        "distance": 386,
        "townName": "Tallahassee",
        "townSize": 7,
        "latitude": 30.46,
        "duration": 443
    }, {
        "date": "2012-01-07",
        "distance": 348,
        "townName": "New Orleans",
        "townSize": 10,
        "latitude": 29.94,
        "duration": 405
    }, {
        "date": "2012-01-08",
        "distance": 238,
        "townName": "Houston",
        "townName2": "Houston",
        "townSize": 16,
        "latitude": 29.76,
        "duration": 309
    }, {
        "date": "2012-01-09",
        "distance": 218,
        "townName": "Dalas",
        "townSize": 17,
        "latitude": 32.8,
        "duration": 287
    }, {
        "date": "2012-01-10",
        "distance": 349,
        "townName": "Oklahoma City",
        "townSize": 11,
        "latitude": 35.49,
        "duration": 485
    }, {
        "date": "2012-01-11",
        "distance": 603,
        "townName": "Kansas City",
        "townSize": 10,
        "latitude": 39.1,
        "duration": 890
    }, {
        "date": "2012-01-12",
        "distance": 534,
        "townName": "Denver",
        "townName2": "Denver",
        "townSize": 18,
        "latitude": 39.74,
        "duration": 810
    }, {
        "date": "2012-01-13",
        "townName": "Salt Lake City",
        "townSize": 12,
        "distance": 425,
        "duration": 670,
        "latitude": 40.75,
        "dashLength": 8,
        "alpha": 0.4
    }, {
        "date": "2012-01-14",
        "latitude": 36.1,
        "duration": 470,
        "townName": "Las Vegas",
        "townName2": "Las Vegas"
    }, {
        "date": "2012-01-15"
    }, {
        "date": "2012-01-16"
    }, {
        "date": "2012-01-17"
    }, {
        "date": "2012-01-18"
    }, {
        "date": "2012-01-19"
    }],
    "valueAxes": [{
        "id": "distanceAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left",
        "title": "distance"
    }, {
        "id": "latitudeAxis",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": false,
        "position": "right"
    }, {
        "id": "durationAxis",
        "duration": "mm",
        "durationUnits": {
            "hh": "h ",
            "mm": "min"
        },
        "axisAlpha": 0,
        "gridAlpha": 0,
        "inside": true,
        "position": "right",
        "title": "duration"
    }],
    "graphs": [{
        "alphaField": "alpha",
        "balloonText": "[[value]] miles",
        "dashLengthField": "dashLength",
        "fillAlphas": 0.7,
        "legendPeriodValueText": "total: [[value.sum]] mi",
        "legendValueText": "[[value]] mi",
        "title": "distance",
        "type": "column",
        "valueField": "distance",
        "valueAxis": "distanceAxis"
    }, {
        "balloonText": "latitude:[[value]]",
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "useLineColorForBulletBorder": true,
        "bulletColor": "#FFFFFF",
        "bulletSizeField": "townSize",
        "dashLengthField": "dashLength",
        "descriptionField": "townName",
        "labelPosition": "right",
        "labelText": "[[townName2]]",
        "legendValueText": "[[value]]/[[description]]",
        "title": "latitude/city",
        "fillAlphas": 0,
        "valueField": "latitude",
        "valueAxis": "latitudeAxis"
    }, {
        "bullet": "square",
        "bulletBorderAlpha": 1,
        "bulletBorderThickness": 1,
        "dashLengthField": "dashLength",
        "legendValueText": "[[value]]",
        "title": "duration",
        "fillAlphas": 0,
        "valueField": "duration",
        "valueAxis": "durationAxis"
    }],
    "chartCursor": {
        "categoryBalloonDateFormat": "DD",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "valueBalloonsEnabled": false,
        "zoomable": false
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
        "dateFormats": [{
            "period": "DD",
            "format": "DD"
        }, {
            "period": "WW",
            "format": "MMM DD"
        }, {
            "period": "MM",
            "format": "MMM"
        }, {
            "period": "YYYY",
            "format": "YYYY"
        }],
        "parseDates": true,
        "autoGridCount": false,
        "axisColor": "#555555",
        "gridAlpha": 0.1,
        "gridColor": "#FFFFFF",
        "gridCount": 50
    },
    "export": {
        "enabled": true
    }
});



/*----------- Start amchart barchart 8 -----------*/


Highcharts.chart('chartdiv-8', {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: ''
  },
  xAxis: [{
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value} °C',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Rainfall',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} mm',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    opposite: true
  }],

  tooltip: {
    shared: true
  },

  series: [{
    name: 'Rainfall',
    type: 'column',
    yAxis: 1,
    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    tooltip: {
      pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
    }
  }, {
    name: 'Rainfall error',
    type: 'errorbar',
    yAxis: 1,
    data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
    tooltip: {
      pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
    }
  }, {
    name: 'Temperature',
    type: 'spline',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    tooltip: {
      pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
    }
  }, {
    name: 'Temperature error',
    type: 'errorbar',
    data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
    tooltip: {
      pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
    }
  }]
});

