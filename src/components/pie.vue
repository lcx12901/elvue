<template>
	<div class="pie" id="main1" style="float:left;width:100%;height: 300px"></div>
</template>

<script>
	let echarts = require('echarts/lib/echarts')
	require('echarts/lib/chart/pie')
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
	export default{
		name:'Pie',
		created(){
			
		},
		mounted(){
			this.initData();
		},
		methods:{
			initData(){
				var myChart = echarts.init(document.getElementById('main1'));
				myChart.setOption({
					title:{
						text:'Github前五前端UI框架（单位：K）',
						subtext:'数据来自谷歌搜索',
						x:'center'
					},
					tooltip:{
						trigger:'item',
						formatter:"{a} <br/>{b} : {c} ({d}%)"
					},
					legend:{
						orient: 'vertical',
						bottom: 'bottom',
						data: ['Element','iview','vuetify','flutter','weui']
					},
					series:{
						name: 'Star数量',
						type: 'pie',
						radius : '55%',
						center: ['50%', '60%'],
						data:[
							{value:42.6,name:'Element'},
							{value:22.8,name:'iview'},
							{value:22.7,name:'vuetify'},
							{value:80.4,name:'flutter'},
							{value:23.6,name:'weui'}
						]
					},
					itemStyle:{
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}) 
			}
		}
		
	}
</script>

<style>
</style>
