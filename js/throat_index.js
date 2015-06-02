var colorDict = {
	"ltn": "#d8ba71",
	"apple-daily": "#ec4a55",
	"ebc": "#fef36f",
	"udn": "#febb6d",
	"ctnews": "#fd888f",
	"cna": "#51a7de"
};

var data = [10,20,30,40,50,60];
var colors = ["#d8ba71", "#ec4a55", "#fef36f","#febb6d", "#fd888f", "#51a7de"];
var names = ["自由時報", "蘋果日報", "東森新聞雲", "聯合新聞網", "中國時報", "中央社"];
var sums = [];

var medianames = ['appledaily', 'ettoday', 'ltn', 'chinatimes', 'udn', 'cna'];

//-------------------------------------------------------------------------------------------//



d3.csv("data/udn_throat_data.csv", function(throatData){

	//sums of each news website
		
	for (var j = 0; j < names.length; j++) {
		sums.push( parseInt(throatData[throatData.length-1][names[j]] ));
	};
	// console.log(sums);

	var totalDataSeries = [];
	for (var m = 0; m < names.length; m++) {
		totalDataSeries.push({
			"name": names[m],
			"y": sums[m]
		});
	};
	// console.log(totalDataSeries);

	//plot for sum chart
	$(document).ready(function(){
		$('#chart-total').highcharts({
            chart: {
	            type: 'column'
		    },
		    credits:{
		      	enabled: false
		    },
		    colors : colors,
		    title: {
		        text: ''
		    },
		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		        type: 'category'
		    },
		    yAxis: {
		        title: {
		            text: ''
		        },
			    gridLineWidth: 0,
			    labels: {
			        enabled: false
		        }
		    },
		    legend: {
		        enabled: false
		    },
		    plotOptions: {
		        series: {
		            borderWidth: 0,
		            dataLabels: {
		                enabled: true,
		                format: '{point.y:.0f}篇'
		            }
		        }
		    },

		    tooltip: {
		    	//{series.name}
		        headerFormat: '<span style="font-size:11px"></span>',
		        pointFormat: '<span style="color:{point.color}">{point.name}<br></span>有 <b>{point.y}篇</b> <br>與「{series.name}」相關的報導<br/>'
		    },

		    series: [{
		        name: '割喉',
		        colorByPoint: true,
		        data: totalDataSeries
		    }]

	    });

	});







				//get the percentage of term "人魔"
				var hannibalDataSeries = [];
				for (var k = 0; k < throatData.length; k++) {
					if (throatData[k]["關鍵字"] != "人魔") {
						continue;
					}else if(throatData[k]["關鍵字"] == "人魔"){
						var subData = throatData[k];
						for (var l = 0; l < names.length; l++) {
							hannibalDataSeries.push({
								"name": names[l],
								// "y": parseInt((parseInt(subData[names[l]])/ sums[l])*10000)/100
								"y": parseInt(subData[names[l]])
							});
						};

						break;
					}
				};
				// console.log(hannibalDataSeries);


				//plot for hannibal chart
				$(document).ready(function(){
					$('#chart-hannibal').highcharts({
		                chart: {
		                    type: 'column'
		                },
		                credits:{
					      	enabled: false
					    },
		                colors : colors,
		                title: {
		                    text: ''
		                },
		                subtitle: {
		                    text: ''
		                },
		                xAxis: {
		                    type: 'category'
		                },
		                yAxis: {
		                    title: {
		                        text: ''
		                    },
		                    gridLineWidth: 0,
		                    labels: {
		                    	enabled: false
		                    }
		                },
		                legend: {
		                    enabled: false
		                },
		                plotOptions: {
		                    series: {
		                        borderWidth: 0,
		                        dataLabels: {
		                            enabled: true,
		                            format: '{point.y:.0f}次'
		                        }
		                    }
		                },

		                tooltip: {
		                	//{series.name}
		                    headerFormat: '<span style="font-size:11px"></span>',
		                    pointFormat: '<span style="color:{point.color}">{point.name}<br></span>相關報導中有 <b>{point.y:.0f}次</b> <br>使用了「{series.name}」這個詞<br/>'
		                },

		                series: [{
		                    name: '人魔',
		                    colorByPoint: true,
		                    data: hannibalDataSeries
		                }]
		                // drilldown: {
		                    // series: drilldownSeries
		                // }
	            	});


				});


				//get the percentage of term "冷血"
				var coldBloodDataSeries = [];
				for (var k = 0; k < throatData.length; k++) {
					if (throatData[k]["關鍵字"] != "冷血") {
						continue;
					}else if(throatData[k]["關鍵字"] == "冷血"){
						var subData = throatData[k];
						for (var l = 0; l < names.length; l++) {
							coldBloodDataSeries.push({
								"name": names[l],
								// "y": parseInt((parseInt(subData[names[l]])/ sums[l])*10000)/100
								"y": parseInt(subData[names[l]] )
							});
						};

						break;
					}
				};
				// console.log(coldBloodDataSeries);


				//plot for coldblooded chart
				$(document).ready(function(){
					$('#chart-coldblood').highcharts({
		                chart: {
		                    type: 'column'
		                },
		                credits:{
					      	enabled: false
					    },
		                colors : colors,
		                title: {
		                    text: ''
		                },
		                subtitle: {
		                    text: ''
		                },
		                xAxis: {
		                    type: 'category'
		                },
		                yAxis: {
		                    title: {
		                        text: ''
		                    },
		                    gridLineWidth: 0,
		                    labels: {
		                    	enabled: false
		                    }
		                },
		                legend: {
		                    enabled: false
		                },
		                plotOptions: {
		                    series: {
		                        borderWidth: 0,
		                        dataLabels: {
		                            enabled: true,
		                            format: '{point.y:.0f}次'
		                        }
		                    }
		                },

		                tooltip: {
		                	//{series.name}
		                    headerFormat: '<span style="font-size:11px"></span>',
		                    pointFormat: '<span style="color:{point.color}">{point.name}<br></span>相關報導中有 <b>{point.y:.0f}次</b> <br>使用了「{series.name}」這個詞<br/>'
		                },

		                series: [{
		                    name: '冷血',
		                    colorByPoint: true,
		                    data: coldBloodDataSeries
		                }]

	            	});
				});

				//get the percentage of term "死刑"＋ "廢死"
				var deathSentenceDataSeries = [];
				for (var k = 0; k < throatData.length; k++) {
					if (throatData[k]["關鍵字"] != "死sum") {
						continue;
					}else if(throatData[k]["關鍵字"] == "死sum"){
						var subData = throatData[k];
						for (var l = 0; l < names.length; l++) {
							deathSentenceDataSeries.push({
								"name": names[l],
								"y": parseInt( subData[names[l]] )
							});
						};

						break;
					}
				};
				// console.log(deathSentenceDataSeries);


				//plot for death sentence chart
				$(document).ready(function(){
					$('#chart-death-sentence').highcharts({
		                chart: {
		                    type: 'column'
		                },
		                credits:{
					      	enabled: false
					    },
		                colors : colors,
		                title: {
		                    text: ''
		                },
		                subtitle: {
		                    text: ''
		                },
		                xAxis: {
		                    type: 'category'
		                },
		                yAxis: {
		                    title: {
		                        text: ''
		                    },
		                    gridLineWidth: 0,
		                    labels: {
		                    	enabled: false
		                    }
		                },
		                legend: {
		                    enabled: false
		                },
		                plotOptions: {
		                    series: {
		                        borderWidth: 0,
		                        dataLabels: {
		                            enabled: true,
		                            format: '{point.y:.0f}次'
		                        }
		                    }
		                },

		                tooltip: {
		                	//{series.name}
		                    headerFormat: '<span style="font-size:11px"></span>',
		                    pointFormat: '<span style="color:{point.color}">{point.name}<br></span>相關報導中使用了 <b>{point.y}次</b> <br>「{series.name}」<br/>'
		                },

		                series: [{
		                    name: '死刑或是廢死',
		                    colorByPoint: true,
		                    data: deathSentenceDataSeries
		                }]
		                // drilldown: {
		                    // series: drilldownSeries
		                // }
	            	});


				});
});

$(document).ready(function(){
	// console.log($('#penknife-img').width());
	$('#penknife-img').css('height', $('#penknife-img').width()*493/768);
	$('.worst-news-block').css('height', $('.worst-news-block').width()*419/629);

	// var outer_height = $(".worst-news-block").height();

	/*for (var i = 0; i < medianames.length; i++){
		var id = '#worst-text-' + medianames[i];
		var text_height = $(id).height();
		var margin = (outer_height - text_height)/2;

		$(id).css("margin-top", margin);
	}*/
});