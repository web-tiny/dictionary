var generatePieOptions = function (title, items) {
	return {
		title: { show: true, text: title },
		color: ['#4caffe', '#ff7a7a', '#a178fc', '#008B45', '#EEC900'],
		tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {d}%" },
		legend: {
			orient: 'vertical',
			x: 'center',
			y: 'bottom',
			itemWidth: 40,
			itemHeight: 15,
			itemGap: 15,
			formatter: function (name) {
				var len = items.length;
				for (i = 0; i < len; i++) {
					if (name == items[i].name) {
						return '　　' + name + '　　' + items[i].value + '%';
					}
				}
			},
			data: [items[0].name, items[1].name, items[2].name]
		},
		toolbox: { show: false },
		calculable: true,
		series: [
			{
				name: title,
				type: 'pie',
				radius: ['30%', '50%'],
				itemStyle: {
					normal: {
						label: { show: false },
						labelLine: { show: false }
					},
					emphasis: {
						label: { show: false }
					}
				},
				data: [
					{ value: items[0].value, name: items[0].name },
					{ value: items[1].value, name: items[1].name },
					{ value: items[2].value, name: items[2].name }
				]
			}
		]
	};
}

var generateLineOption = function (title, xAxisData, yAxisData) {
	return {
		title: {
			show: false,
			text: title
		},
		// color: '#1E90FF',
		color: '#e8f1ff',
		tooltip: {
			trigger: 'axis',
			formatter: function (params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value + '万元<br/>' +
					params[1].seriesName + ' : ' + params[1].value + '万笔';
			}
		},
		legend: {
			show: false,
			data: ['交易金额', '交易笔数']
		},
		toolbox: { show: false },
		calculable: true,
		grid: [{
			x: 55,
			containLabel: true,
		}],
		xAxis: [
			{
				type: 'category',
				axisLine: { onZero: false },
				boundaryGap: false,
				axisLabel: {
					formatter: function (name) {
						return name;
					},
					color: "#999999"
				},
				data: xAxisData,
				splitLine: {//纵坐标线
					show: true,
				},
				axisTick: {
					show: false
				}, axisLine: {
					lineStyle: {
						color: 'rgba(0,0,0,.6)',
						width: 1,
						type: 'solid',
					}
				}

			}
		],
		yAxis: [
			{
				name: '(单位：万元)',
				type: 'value',
				// width: '30px',
				axisLabel: {
					formatter: '{value}',
					color: "#999999",
					show: true
				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#c7c7c7',
						width: 1,
					}
				}
			},
		],
		series: [
			{
				name: '交易金额',
				type: 'line',
				smooth: true,
				symbol: 'emptyCircle',
				itemStyle: {
					normal: {
						lineStyle: {
							shadowColor: 'rgba(0,0,0,0)',
							color: '#247cf4'
						},
						areaStyle: { type: 'default', color: '#e8f1ff' },
						color: '#4c94f6',
					},

				},
				data: yAxisData[0],
			}, {
				name: '交易笔数',
				type: 'line',
				smooth: true,
				symbol: 'none', /**'circle' | 'rectangle' | 'triangle' | 'diamond' |'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond' **/
				itemStyle: {
					normal: {
						lineStyle: {
							shadowColor: 'rgba(0,0,0,0)'
						}
					}
				},
				data: yAxisData[1]
			},
		]
	};
}

var generateBarOption = function (title, xAxisData, yAxisData) {
	// var color = '#8B5742';
	var color = '#f9c07b';
	var yAxisName = '(万笔)';
	if (title == '交易金额') {
		// color = '#104E8B';
		color = '#247cf4';
		yAxisName = '(万元)';
	}

	return {
		title: {
			show: false,
			text: title
		},
		tooltip: {
			trigger: 'axis',
			formatter: function (params) {
				return params[0].name + '月<br/>' +
					params[0].seriesName + ' : ' + params[0].value + yAxisName;
			}
		},
		color: color,
		toolbox: { show: false },
		calculable: true,
		xAxis: [
			{
				name: '(月)',
				type: 'category',
				data: xAxisData,
				axisTick: {
					show: false
				}, 
				axisLabel: {
					color: '#999'
				},
				axisLine: {
					lineStyle: {
						color: '#c7c7c7',
						width: 1,
					}
				}
			}
		],
		yAxis: [
			{
				name: '单位' + yAxisName,
				type: 'value',
				axisTick: {
					show: false
				},
				axisLabel: {
					color: '#999'
				},
				axisLine: {
					lineStyle: {
						color: '#c7c7c7',
						width: 1,
					}
				}
			}
		],
		grid: [{
			x: 55
		}],
		series: [
			{
				name: title,
				type: 'bar',
				data: yAxisData,
				barGap: '50%',
				barCategoryGap: '50%',
			}
		]
	};
}
