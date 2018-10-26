$(function(){
  
        // 基于准备好的dom，初始化echarts实例
        var  chart_left = echarts.init(document.querySelector('.chart_left'));
        var  chart_right = echarts.init(document.querySelector('.chart_right'));
      
        // 指定图表的配置项和数据
        var option1 = {
            title: {
                text: '2018年注册人数'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: ["1月","2月","3月","4月","5月","6月"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [500, 900, 1080, 700, 1200, 1000]
            }]
        };


        // 饼状图
      var  option2 = {
          title : {
              text: '热门品牌销售',
              subtext: '2018年6月',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['耐克','阿迪','李宁','特步','新百伦']
          },
          series : [
              {
                  name: '销售情况',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                      {value:335, name:'耐克'},
                      {value:310, name:'阿迪'},
                      {value:234, name:'李宁'},
                      {value:135, name:'特步'},
                      {value:1548, name:'新百伦'}
                  ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
        // 使用刚指定的配置项和数据显示图表。
        chart_left.setOption(option1);
        chart_right.setOption(option2);
})