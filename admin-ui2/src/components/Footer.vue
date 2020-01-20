<script
        src="https://www.google.com/maps/embed/v1/MODE?key=AIzaSyCbeeRawZdLI_ohhox1RQRdxME48IHiS3Q&parameters"></script>

    <script type="text/javascript">
        Highcharts.chart('statistic_visitor', {

            xAxis: {
                categories: ['Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },

            series: [{
                name: 'User Visitor',
                data: [
                    ['Juni', 120],
                    ['Juli', 249],
                    ['Agustus', 355],
                    ['September', 300],
                    ['Oktober', 422],
                    ['November', 828],
                    ['Desember', 1028],
                ],
                color: {
                    linearGradient: [0, 0, 0, 280],
                    stops: [
                        [0, '#7A5ACA'],
                        [1, '#F6B4A2']
                    ]
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    </script>

    <script type="text/javascript">
        Highcharts.chart('statistic_host', {

            xAxis: {
                categories: ['Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },

            series: [{
                name: 'Host Member',
                data: [
                    ['Juni', 600],
                    ['Juli', 400],
                    ['Agustus', 355],
                    ['September', 300],
                    ['Oktober', 422],
                    ['November', 828],
                    ['Desember', 1028],
                ],
                color: {
                    linearGradient: [0, 0, 0, 280],
                    stops: [
                        [0, '#7A5ACA'],
                        [1, '#F6B4A2']
                    ]
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

        });
    </script>


    <script type="text/javascript">
        Highcharts.chart('statistic_bar', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>Rp. {point.y:.0f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Revenue per year',
                data: [1000000, 1200000, 800000, 400000, 1800000, 1400000, 1900000, 200000, 450000, 1240321, 1900000, 2500000],
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#7A5ACA'],
                        [1, '#F6B4A2']
                    ]
                }
            }]
        });
    </script>


    <script type="text/javascript">
        // Build the chart
        Highcharts.chart('statistic_pie', {
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
            series: [{
                name: 'Age',
                colorByPoint: true,
                data: [{
                    name: '0-10',
                    y: 11.84
                }, {
                    name: '11-20',
                    y: 4.18
                }, {
                    name: '21-30',
                    y: 10.85
                }, {
                    name: '31-40',
                    y: 4.67
                }, {
                    name: '41-50',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: '> 51',
                    y: 7.05
                }]
            }]
        });
    </script>