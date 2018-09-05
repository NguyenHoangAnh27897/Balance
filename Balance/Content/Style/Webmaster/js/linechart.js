/*----------- Start amchart linechart 1 -----------*/
var chart = AmCharts.makeChart("chartdiv-1", {
    "type": "serial",
    "theme": "dark",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD HH:NN",
    "dataProvider": [{
        "date": "2012-01-01",
        "value": 8
    }, {
        "date": "2012-01-02",
        "color": "#CC0000",
        "value": 10
    }, {
        "date": "2012-01-03",
        "value": 12
    }, {
        "date": "2012-01-04",
        "value": 14
    }, {
        "date": "2012-01-05",
        "value": 11
    }, {
        "date": "2012-01-06",
        "value": 6
    }, {
        "date": "2012-01-07",
        "value": 7
    }, {
        "date": "2012-01-08",
        "value": 9
    }, {
        "date": "2012-01-09",
        "value": 13
    }, {
        "date": "2012-01-10",
        "value": 15
    }, {
        "date": "2012-01-11",
        "color": "#CC0000",
        "value": 19
    }, {
        "date": "2012-01-12",
        "value": 21
    }, {
        "date": "2012-01-13",
        "value": 22
    }, {
        "date": "2012-01-14",
        "value": 20
    }, {
        "date": "2012-01-15",
        "value": 18
    }, {
        "date": "2012-01-16",
        "value": 14
    }, {
        "date": "2012-01-17",
        "color": "#CC0000",
        "value": 16
    }, {
        "date": "2012-01-18",
        "value": 18
    }, {
        "date": "2012-01-19",
        "value": 17
    }, {
        "date": "2012-01-20",
        "value": 15
    }, {
        "date": "2012-01-21",
        "value": 12
    }, {
        "date": "2012-01-22",
        "color": "#CC0000",
        "value": 10
    }, {
        "date": "2012-01-23",
        "value": 8
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "guides": [{
            "fillAlpha": 0.1,
            "fillColor": "#888888",
            "lineAlpha": 0,
            "toValue": 16,
            "value": 10
        }],
        "position": "left",
        "tickLength": 0
    }],
    "graphs": [{
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
        "bullet": "round",
        "dashLength": 3,
        "colorField": "color",
        "valueField": "value"
    }],
    "trendLines": [{
        "finalDate": "2012-01-11 12",
        "finalValue": 19,
        "initialDate": "2012-01-02 12",
        "initialValue": 10,
        "lineColor": "#CC0000"
    }, {
        "finalDate": "2012-01-22 12",
        "finalValue": 10,
        "initialDate": "2012-01-17 12",
        "initialValue": 16,
        "lineColor": "#CC0000"
    }],
    "chartScrollbar": {
        "scrollbarHeight": 2,
        "offset": -1,
        "backgroundAlpha": 0.1,
        "backgroundColor": "#888888",
        "selectedBackgroundColor": "#67b7dc",
        "selectedBackgroundAlpha": 1
    },
    "chartCursor": {
        "fullWidth": true,
        "valueLineEabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "cursorAlpha": 0
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisAlpha": 0,
        "gridAlpha": 0.1,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

chart.addListener("dataUpdated", zoomChart);

function zoomChart() {
    chart.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
}



/*----------- Start amchart linechart 2 -----------*/

var chart = AmCharts.makeChart("chartdiv-2", {
    "type": "serial",
    "theme": "light",
    "marginTop": 0,
    "marginRight": 80,
    "dataProvider": [{
        "year": "1950",
        "value": -0.307
    }, {
        "year": "1951",
        "value": -0.168
    }, {
        "year": "1952",
        "value": -0.073
    }, {
        "year": "1953",
        "value": -0.027
    }, {
        "year": "1954",
        "value": -0.251
    }, {
        "year": "1955",
        "value": -0.281
    }, {
        "year": "1956",
        "value": -0.348
    }, {
        "year": "1957",
        "value": -0.074
    }, {
        "year": "1958",
        "value": -0.011
    }, {
        "year": "1959",
        "value": -0.074
    }, {
        "year": "1960",
        "value": -0.124
    }, {
        "year": "1961",
        "value": -0.024
    }, {
        "year": "1962",
        "value": -0.022
    }, {
        "year": "1963",
        "value": 0
    }, {
        "year": "1964",
        "value": -0.296
    }, {
        "year": "1965",
        "value": -0.217
    }, {
        "year": "1966",
        "value": -0.147
    }, {
        "year": "1967",
        "value": -0.15
    }, {
        "year": "1968",
        "value": -0.16
    }, {
        "year": "1969",
        "value": -0.011
    }, {
        "year": "1970",
        "value": -0.068
    }, {
        "year": "1971",
        "value": -0.19
    }, {
        "year": "1972",
        "value": -0.056
    }, {
        "year": "1973",
        "value": 0.077
    }, {
        "year": "1974",
        "value": -0.213
    }, {
        "year": "1975",
        "value": -0.17
    }, {
        "year": "1976",
        "value": -0.254
    }, {
        "year": "1977",
        "value": 0.019
    }, {
        "year": "1978",
        "value": -0.063
    }, {
        "year": "1979",
        "value": 0.05
    }, {
        "year": "1980",
        "value": 0.077
    }, {
        "year": "1981",
        "value": 0.12
    }, {
        "year": "1982",
        "value": 0.011
    }, {
        "year": "1983",
        "value": 0.177
    }, {
        "year": "1984",
        "value": -0.021
    }, {
        "year": "1985",
        "value": -0.037
    }, {
        "year": "1986",
        "value": 0.03
    }, {
        "year": "1987",
        "value": 0.179
    }, {
        "year": "1988",
        "value": 0.18
    }, {
        "year": "1989",
        "value": 0.104
    }, {
        "year": "1990",
        "value": 0.255
    }, {
        "year": "1991",
        "value": 0.21
    }, {
        "year": "1992",
        "value": 0.065
    }, {
        "year": "1993",
        "value": 0.11
    }, {
        "year": "1994",
        "value": 0.172
    }, {
        "year": "1995",
        "value": 0.269
    }, {
        "year": "1996",
        "value": 0.141
    }, {
        "year": "1997",
        "value": 0.353
    }, {
        "year": "1998",
        "value": 0.548
    }, {
        "year": "1999",
        "value": 0.298
    }, {
        "year": "2000",
        "value": 0.267
    }, {
        "year": "2001",
        "value": 0.411
    }, {
        "year": "2002",
        "value": 0.462
    }, {
        "year": "2003",
        "value": 0.47
    }, {
        "year": "2004",
        "value": 0.445
    }, {
        "year": "2005",
        "value": 0.47
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    "graphs": [{
        "id": "g1",
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "gridAlpha": 0,
        "color": "#888888",
        "scrollbarHeight": 60,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "autoGridCount": true,
        "selectedGraphFillAlpha": 0,
        "graphLineAlpha": 0.2,
        "graphLineColor": "#c2c2c2",
        "selectedGraphLineColor": "#888888",
        "selectedGraphLineAlpha": 1

    },
    "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "valueLineAlpha": 0.5,
        "fullWidth": true
    },
    "dataDateFormat": "YYYY",
    "categoryField": "year",
    "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});

chart.addListener("rendered", zoomChart);
if (chart.zoomChart) {
    chart.zoomChart();
}

function zoomChart() {
    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
}


/*----------- Start amchart linechart 3 -----------*/

var chartData = generateChartData();

var chart = AmCharts.makeChart("chartdiv-3", {
    "type": "serial",
    "theme": "dark",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": chartData,
    "synchronizeGrid": true,
    "valueAxes": [{
        "id": "v1",
        "axisColor": "#FF6600",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "left"
    }, {
        "id": "v2",
        "axisColor": "#FCD202",
        "axisThickness": 2,
        "axisAlpha": 1,
        "position": "right"
    }, {
        "id": "v3",
        "axisColor": "#B0DE09",
        "axisThickness": 2,
        "gridAlpha": 0,
        "offset": 50,
        "axisAlpha": 1,
        "position": "left"
    }],
    "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FF6600",
        "bullet": "round",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "red line",
        "valueField": "visits",
        "fillAlphas": 0
    }, {
        "valueAxis": "v2",
        "lineColor": "#FCD202",
        "bullet": "square",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "yellow line",
        "valueField": "hits",
        "fillAlphas": 0
    }, {
        "valueAxis": "v3",
        "lineColor": "#B0DE09",
        "bullet": "triangleUp",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "green line",
        "valueField": "views",
        "fillAlphas": 0
    }],
    "chartScrollbar": {},
    "chartCursor": {
        "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "axisColor": "#DADADA",
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true,
        "position": "bottom-right"
    }
});

chart.addListener("dataUpdated", zoomChart);
zoomChart();


// generate some random data, quite different range
function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

    var visits = 1600;
    var hits = 2900;
    var views = 8700;


    for (var i = 0; i < 100; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
        });
    }
    return chartData;
}

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
}




/*----------- Start amchart linechart 4 -----------*/


Highcharts.chart('chartdiv-4', {
    chart: {
        type: 'area'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
        split: true
    },
    plotOptions: {
        area: {
            stacking: 'percent',
            lineColor: '#ffffff',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#ffffff'
            }
        },
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
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
});


/*----------- Start amchart linechart 5 -----------*/


Highcharts.chart('chartdiv-5', {
    chart: {
        type: 'area'
    },
    title: {
        text: ''
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function() {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function() {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: '#ffffff'
        },
        itemHoverStyle: {
            color: '#ffffff'
        },
        itemHiddenStyle: {
            color: '#ffffff'
        }
    },
    labels: {
        style: {
            color: '#ffffff'
        }
    },
    series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }, {
        name: 'USSR/Russia',
        data: [null, null, null, null, null, null, null, null, null, null,
            5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
            1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
            11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
            30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
            37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
            21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
            12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500
        ]
    }]
});


/*----------- Start amchart linechart 6 -----------*/

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    var options = {
        title: '',
        curveType: 'function',
        backgroundColor: '#0E0E26',
        color: '#ffffff',
        hAxis: {
            title: 'Years',
            textStyle: {
                color: '#ffffff'
            },

            titleTextStyle: {
                color: '#ffffff'
            }
        },
        vAxis: {
            title: 'Temperature',
            textStyle: {
                color: '#ffffff'
            },
            titleTextStyle: {
                color: '#ffffff'
            }
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('chartdiv-6'));

    chart.draw(data, options);
}



/*----------- Start amchart linechart 1 -----------*/