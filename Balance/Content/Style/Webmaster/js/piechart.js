/*---------- Start pie chart 1 ----------*/

var chart = AmCharts.makeChart( "chartdiv-1", {
  "type": "pie",
  "theme": "dark",
  "dataProvider": [ {
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  } ],
  "valueField": "litres",
  "titleField": "country",
   "balloon":{
   "fixedPosition":true
  },
  "export": {
    "enabled": true
  }
} );



/*---------- Start pie chart 2 ----------*/
/**
 * Define data for each year
 */
var chartData = {
    "1995": [
        { "sector": "Agriculture", "size": 6.6 },
        { "sector": "Mining and Quarrying", "size": 0.6 },
        { "sector": "Manufacturing", "size": 23.2 },
        { "sector": "Electricity and Water", "size": 2.2 },
        { "sector": "Construction", "size": 4.5 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.6 },
        { "sector": "Transport and Communication", "size": 9.3 },
        { "sector": "Finance, real estate and business services", "size": 22.5 }
    ],
    "1996": [
        { "sector": "Agriculture", "size": 6.4 },
        { "sector": "Mining and Quarrying", "size": 0.5 },
        { "sector": "Manufacturing", "size": 22.4 },
        { "sector": "Electricity and Water", "size": 2 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.8 },
        { "sector": "Transport and Communication", "size": 9.7 },
        { "sector": "Finance, real estate and business services", "size": 22 }
    ],
    "1997": [
        { "sector": "Agriculture", "size": 6.1 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.9 },
        { "sector": "Electricity and Water", "size": 1.8 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 13.7 },
        { "sector": "Transport and Communication", "size": 9.4 },
        { "sector": "Finance, real estate and business services", "size": 22.1 }
    ],
    "1998": [
        { "sector": "Agriculture", "size": 6.2 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 21.4 },
        { "sector": "Electricity and Water", "size": 1.9 },
        { "sector": "Construction", "size": 4.2 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.5 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 23 }
    ],
    "1999": [
        { "sector": "Agriculture", "size": 5.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20 },
        { "sector": "Electricity and Water", "size": 1.8 },
        { "sector": "Construction", "size": 4.4 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.2 },
        { "sector": "Transport and Communication", "size": 10.5 },
        { "sector": "Finance, real estate and business services", "size": 24.7 }
    ],
    "2000": [
        { "sector": "Agriculture", "size": 5.1 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 20.4 },
        { "sector": "Electricity and Water", "size": 1.7 },
        { "sector": "Construction", "size": 4 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 24.6 }
    ],
    "2001": [
        { "sector": "Agriculture", "size": 5.5 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.3 },
        { "sector": "Electricity and Water", "size": 1.6 },
        { "sector": "Construction", "size": 3.1 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.3 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 25.8 }
    ],
    "2002": [
        { "sector": "Agriculture", "size": 5.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 20.5 },
        { "sector": "Electricity and Water", "size": 1.6 },
        { "sector": "Construction", "size": 3.6 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.1 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 26 }
    ],
    "2003": [
        { "sector": "Agriculture", "size": 4.9 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 19.4 },
        { "sector": "Electricity and Water", "size": 1.5 },
        { "sector": "Construction", "size": 3.3 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.2 },
        { "sector": "Transport and Communication", "size": 11 },
        { "sector": "Finance, real estate and business services", "size": 27.5 }
    ],
    "2004": [
        { "sector": "Agriculture", "size": 4.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 18.4 },
        { "sector": "Electricity and Water", "size": 1.4 },
        { "sector": "Construction", "size": 3.3 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.9 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 28.1 }
    ],
    "2005": [
        { "sector": "Agriculture", "size": 4.3 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 18.1 },
        { "sector": "Electricity and Water", "size": 1.4 },
        { "sector": "Construction", "size": 3.9 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.7 },
        { "sector": "Transport and Communication", "size": 10.6 },
        { "sector": "Finance, real estate and business services", "size": 29.1 }
    ],
    "2006": [
        { "sector": "Agriculture", "size": 4 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 16.5 },
        { "sector": "Electricity and Water", "size": 1.3 },
        { "sector": "Construction", "size": 3.7 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 14.2 },
        { "sector": "Transport and Communication", "size": 12.1 },
        { "sector": "Finance, real estate and business services", "size": 29.1 }
    ],
    "2007": [
        { "sector": "Agriculture", "size": 4.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 16.2 },
        { "sector": "Electricity and Water", "size": 1.2 },
        { "sector": "Construction", "size": 4.1 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.6 },
        { "sector": "Transport and Communication", "size": 11.2 },
        { "sector": "Finance, real estate and business services", "size": 30.4 }
    ],
    "2008": [
        { "sector": "Agriculture", "size": 4.9 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 17.2 },
        { "sector": "Electricity and Water", "size": 1.4 },
        { "sector": "Construction", "size": 5.1 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.4 },
        { "sector": "Transport and Communication", "size": 11.1 },
        { "sector": "Finance, real estate and business services", "size": 28.4 }
    ],
    "2009": [
        { "sector": "Agriculture", "size": 4.7 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 16.4 },
        { "sector": "Electricity and Water", "size": 1.9 },
        { "sector": "Construction", "size": 4.9 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.5 },
        { "sector": "Transport and Communication", "size": 10.9 },
        { "sector": "Finance, real estate and business services", "size": 27.9 }
    ],
    "2010": [
        { "sector": "Agriculture", "size": 4.2 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 16.2 },
        { "sector": "Electricity and Water", "size": 2.2 },
        { "sector": "Construction", "size": 4.3 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.7 },
        { "sector": "Transport and Communication", "size": 10.2 },
        { "sector": "Finance, real estate and business services", "size": 28.8 }
    ],
    "2011": [
        { "sector": "Agriculture", "size": 4.1 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 14.9 },
        { "sector": "Electricity and Water", "size": 2.3 },
        { "sector": "Construction", "size": 5 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 17.3 },
        { "sector": "Transport and Communication", "size": 10.2 },
        { "sector": "Finance, real estate and business services", "size": 27.2 }
    ],
    "2012": [
        { "sector": "Agriculture", "size": 3.8 },
        { "sector": "Mining and Quarrying", "size": 0.3 },
        { "sector": "Manufacturing", "size": 14.9 },
        { "sector": "Electricity and Water", "size": 2.6 },
        { "sector": "Construction", "size": 5.1 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 15.8 },
        { "sector": "Transport and Communication", "size": 10.7 },
        { "sector": "Finance, real estate and business services", "size": 28 }
    ],
    "2013": [
        { "sector": "Agriculture", "size": 3.7 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 14.9 },
        { "sector": "Electricity and Water", "size": 2.7 },
        { "sector": "Construction", "size": 5.7 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.5 },
        { "sector": "Transport and Communication", "size": 10.5 },
        { "sector": "Finance, real estate and business services", "size": 26.6 }
    ],
    "2014": [
        { "sector": "Agriculture", "size": 3.9 },
        { "sector": "Mining and Quarrying", "size": 0.2 },
        { "sector": "Manufacturing", "size": 14.5 },
        { "sector": "Electricity and Water", "size": 2.7 },
        { "sector": "Construction", "size": 5.6 },
        { "sector": "Trade (Wholesale, Retail, Motor)", "size": 16.6 },
        { "sector": "Transport and Communication", "size": 10.5 },
        { "sector": "Finance, real estate and business services", "size": 26.5 }
    ]
};


/**
 * Create the chart
 */
var currentYear = 1995;
var chart = AmCharts.makeChart("chartdiv-2", {
    "type": "pie",
    "theme": "dark",
    "dataProvider": [],
    "valueField": "size",
    "titleField": "sector",
    "startDuration": 0,
    "innerRadius": 80,
    "pullOutRadius": 20,
    "marginTop": 30,
    "titles": [{
        "text": "South African Economy"
    }],
    "allLabels": [{
        "y": "54%",
        "align": "center",
        "size": 25,
        "bold": true,
        "text": "1995",
        "color": "#555"
    }, {
        "y": "49%",
        "align": "center",
        "size": 15,
        "text": "Year",
        "color": "#555"
    }],
    "listeners": [{
        "event": "init",
        "method": function(e) {
            var chart = e.chart;

            function getCurrentData() {
                var data = chartData[currentYear];
                currentYear++;
                if (currentYear > 2014)
                    currentYear = 1995;
                return data;
            }

            function loop() {
                chart.allLabels[0].text = currentYear;
                var data = getCurrentData();
                chart.animateData(data, {
                    duration: 1000,
                    complete: function() {
                        setTimeout(loop, 3000);
                    }
                });
            }

            loop();
        }
    }],
    "export": {
        "enabled": true
    }
});


/*---------- Start pie chart 3 ----------*/

var chart;
var legend;
var selected;

var types = [{
  type: "Fossil Energy",
  percent: 70,
  color: "#ff9e01",
  subs: [{
    type: "Oil",
    percent: 15
  }, {
    type: "Coal",
    percent: 35
  }, {
    type: "Nuclear",
    percent: 20
  }]
}, {
  type: "Green Energy",
  percent: 30,
  color: "#b0de09",
  subs: [{
    type: "Hydro",
    percent: 15
  }, {
    type: "Wind",
    percent: 10
  }, {
    type: "Other",
    percent: 5
  }]
}];

function generateChartData() {
  var chartData = [];
  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          percent: types[i].subs[x].percent,
          color: types[i].color,
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: types[i].color,
        id: i
      });
    }
  }
  return chartData;
}

AmCharts.makeChart("chartdiv-3", {
  "type": "pie",
"theme": "dark",

  "dataProvider": generateChartData(),
  "labelText": "[[title]]: [[value]]",
  "balloonText": "[[title]]: [[value]]",
  "titleField": "type",
  "valueField": "percent",
  "outlineColor": "#FFFFFF",
  "outlineAlpha": 0.8,
  "outlineThickness": 2,
  "colorField": "color",
  "pulledField": "pulled",
  "titles": [{
    "text": "Click a slice to see the details"
  }],
  "listeners": [{
    "event": "clickSlice",
    "method": function(event) {
      var chart = event.chart;
      if (event.dataItem.dataContext.id != undefined) {
        selected = event.dataItem.dataContext.id;
      } else {
        selected = undefined;
      }
      chart.dataProvider = generateChartData();
      chart.validateData();
    }
  }],
  "export": {
    "enabled": true
  }
});


/*---------- Start pie chart 4 ----------*/

var chart = AmCharts.makeChart("chartdiv-4", {
  "type": "pie",
  "startDuration": 0,
   "theme": "dark",
  "addClassNames": true,
  "legend":{
   	"position":"right",
    "marginRight":100,
    "autoMargins":false
  },
  "innerRadius": "30%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "200%",
      "height": "200%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [{
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czech Republic",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }, {
    "country": "Austria",
    "litres": 128.3
  }, {
    "country": "UK",
    "litres": 99
  }, {
    "country": "Belgium",
    "litres": 60
  }, {
    "country": "The Netherlands",
    "litres": 50
  }],
  "valueField": "litres",
  "titleField": "country",
  "export": {
    "enabled": true
  }
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function(e) {
  handleRollOver(e);
});

function handleInit(){
  chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e){
  var wedge = e.dataItem.wedge.node;
  wedge.parentNode.appendChild(wedge);
}



/*------------------------------------------------------------ 
 					Strat heighchart area
------------------------------------------------------------*/



/*---------- Start pie chart 5 ----------*/

Highcharts.chart('chartdiv-5', {
    chart: {
        plotBackgroundColor: '#0E0E26',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                	fontSize: '13px',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
                }
            }
        }
    },
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});




/*---------- Start pie chart 6 ----------*/

Highcharts.chart('chartdiv-6', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: '#fff'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#fff'
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
});



/*---------- Start pie chart 7 ----------*/


var colors = Highcharts.getOptions().colors,
    categories = [
        "Chrome",
        "Firefox",
        "Internet Explorer",
        "Safari",
        "Edge",
        "Opera",
        "Other"
    ],
    data = [{
            "y": 62.74,
            "color": colors[2],
            "drilldown": {
                "name": "Chrome",
                "categories": [
                    "Chrome v65.0",
                    "Chrome v64.0",
                    "Chrome v63.0",
                    "Chrome v62.0",
                    "Chrome v61.0",
                    "Chrome v60.0",
                    "Chrome v59.0",
                    "Chrome v58.0",
                    "Chrome v57.0",
                    "Chrome v56.0",
                    "Chrome v55.0",
                    "Chrome v54.0",
                    "Chrome v51.0",
                    "Chrome v49.0",
                    "Chrome v48.0",
                    "Chrome v47.0",
                    "Chrome v43.0",
                    "Chrome v29.0"
                ],
                "data": [
                    0.1,
                    1.3,
                    53.02,
                    1.4,
                    0.88,
                    0.56,
                    0.45,
                    0.49,
                    0.32,
                    0.29,
                    0.79,
                    0.18,
                    0.13,
                    2.16,
                    0.13,
                    0.11,
                    0.17,
                    0.26
                ]
            }
        },
        {
            "y": 10.57,
            "color": colors[1],
            "drilldown": {
                "name": "Firefox",
                "categories": [
                    "Firefox v58.0",
                    "Firefox v57.0",
                    "Firefox v56.0",
                    "Firefox v55.0",
                    "Firefox v54.0",
                    "Firefox v52.0",
                    "Firefox v51.0",
                    "Firefox v50.0",
                    "Firefox v48.0",
                    "Firefox v47.0"
                ],
                "data": [
                    1.02,
                    7.36,
                    0.35,
                    0.11,
                    0.1,
                    0.95,
                    0.15,
                    0.1,
                    0.31,
                    0.12
                ]
            }
        },
        {
            "y": 7.23,
            "color": colors[0],
            "drilldown": {
                "name": "Internet Explorer",
                "categories": [
                    "Internet Explorer v11.0",
                    "Internet Explorer v10.0",
                    "Internet Explorer v9.0",
                    "Internet Explorer v8.0"
                ],
                "data": [
                    6.2,
                    0.29,
                    0.27,
                    0.47
                ]
            }
        },
        {
            "y": 5.58,
            "color": colors[3],
            "drilldown": {
                "name": "Safari",
                "categories": [
                    "Safari v11.0",
                    "Safari v10.1",
                    "Safari v10.0",
                    "Safari v9.1",
                    "Safari v9.0",
                    "Safari v5.1"
                ],
                "data": [
                    3.39,
                    0.96,
                    0.36,
                    0.54,
                    0.13,
                    0.2
                ]
            }
        },
        {
            "y": 4.02,
            "color": colors[5],
            "drilldown": {
                "name": "Edge",
                "categories": [
                    "Edge v16",
                    "Edge v15",
                    "Edge v14",
                    "Edge v13"
                ],
                "data": [
                    2.6,
                    0.92,
                    0.4,
                    0.1
                ]
            }
        },
        {
            "y": 1.92,
            "color": colors[4],
            "drilldown": {
                "name": "Opera",
                "categories": [
                    "Opera v50.0",
                    "Opera v49.0",
                    "Opera v12.1"
                ],
                "data": [
                    0.96,
                    0.82,
                    0.14
                ]
            }
        },
        {
            "y": 7.62,
            "color": colors[6],
            "drilldown": {
                "name": 'Other',
                "categories": [
                    'Other'
                ],
                "data": [
                    7.62
                ]
            }
        }
    ],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

    // add browser data
    browserData.push({
        name: categories[i],
        y: data[i].y,
        color: data[i].color
    });

    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
        brightness = 0.2 - (j / drillDataLen) / 5;
        versionsData.push({
            name: data[i].drilldown.categories[j],
            y: data[i].drilldown.data[j],
            color: Highcharts.Color(data[i].color).brighten(brightness).get()
        });
    }
}

// Create the chart
Highcharts.chart('chartdiv-7', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%']
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    series: [{
        name: 'Browsers',
        data: browserData,
        size: '60%',
        dataLabels: {
            formatter: function() {
                return this.y > 5 ? this.point.name : null;
            },
            color: '#ffffff',
            distance: -30
        }
    }, {
        name: 'Versions',
        data: versionsData,
        size: '80%',
        innerSize: '60%',
        dataLabels: {
            formatter: function() {
                // display only if larger than 1
                return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
                    this.y + '%' : null;
            },
            style: {
            	fontSize: '13px',
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white'
            }
        },
        id: 'versions'
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                series: [{
                    id: 'versions',
                    dataLabels: {
                        enabled: false
                    }
                }]
            }
        }]
    }
});



/*---------- Start pie chart 8 ----------*/

Highcharts.chart('chartdiv-8', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                	fontSize: '13px',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});



/*---------- Start pie chart 9 ----------*/


// Create the chart
Highcharts.chart('chartdiv-9', {
    chart: {
        type: 'pie'
    },
    title: {
        text: ''
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%',
                style: {
                	fontSize: '13px',
                    color: 'white'
                }
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [{
        "name": "Browsers",
        "colorByPoint": true,
        "data": [{
                "name": "Chrome",
                "y": 62.74,
                "drilldown": "Chrome"
            },
            {
                "name": "Firefox",
                "y": 10.57,
                "drilldown": "Firefox"
            },
            {
                "name": "Internet Explorer",
                "y": 7.23,
                "drilldown": "Internet Explorer"
            },
            {
                "name": "Safari",
                "y": 5.58,
                "drilldown": "Safari"
            },
            {
                "name": "Edge",
                "y": 4.02,
                "drilldown": "Edge"
            },
            {
                "name": "Opera",
                "y": 1.92,
                "drilldown": "Opera"
            },
            {
                "name": "Other",
                "y": 7.62,
                "drilldown": null
            }
        ]
    }],
    "drilldown": {
        "series": [{
                "name": "Chrome",
                "id": "Chrome",
                "data": [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                "name": "Firefox",
                "id": "Firefox",
                "data": [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                "name": "Internet Explorer",
                "id": "Internet Explorer",
                "data": [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                "name": "Safari",
                "id": "Safari",
                "data": [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                "name": "Edge",
                "id": "Edge",
                "data": [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                "name": "Opera",
                "id": "Opera",
                "data": [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});



/*---------- Start pie chart 10 ----------*/


// Make monochrome colors
var pieColors = (function() {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('chartdiv-10', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            { name: 'Chrome', y: 61.41 },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge', y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
        ]
    }]
});








/*---------- Start pie chart 4 ----------*/