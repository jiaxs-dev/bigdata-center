<template>

</template>

<script>
  import {Chart} from '@antv/g2'

  const DataSet = require("@antv/data-set");
  export default {
    name: "LineChart",
    props: ['LineChartData'],
    data() {
      return {}
    },
    mounted() {
      this.drawChart()
    },
    methods: {
      drawChart() {
        console.log(this.LineChartData)
        const chart = new Chart({
          container: 'container',
          autoFit: true,
          height: 300,
        });

        chart.data(this.LineChartData);
        chart.scale({
          date: {
            range: [0, 1],
          },
          count: {
            nice: true,
          },
        });

        chart.tooltip({
          showCrosshairs: true,
          shared: true,
        });

        chart.axis('count', {
          label: {
            formatter: (val) => {
              return val + ' 次';
            },
          },
        });

        chart
          .line()
          .position('date*count')
          .color('dimension')
          .shape('smooth');

        chart
          .point()
          .position('date*count')
          .color('dimension')
          .shape('circle');

        chart.render();

      }
    }
  }
</script>

<style scoped>
  .echarts-area {
    min-height: 300px;
  }
</style>
