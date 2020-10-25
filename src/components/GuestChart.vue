<template>
  <highcharts
    ref="highcharts"
    :options="chartOptions"
  >
    sss
  </highcharts>
</template>
<style scoped>
	.chart{
		width: 100%;
		height: 400px;
	}
</style>
<script>

export default {
	data(){
		return{
			chartOptions : {
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
			}
		}
	}
}
</script>