<template>
  <v-chart :forceFit="true" padding="auto" :height="height" :data="data" :scale="scale">
    <v-tooltip/>
    <v-axis/>
    <v-legend/>
    <v-line position="date*temperature" :color="color"/>
    <v-point
      position="date*temperature"
      :color="color"
      :size="4"
      :v-style="style"
      :shape="'circle'"
    />
  </v-chart>
</template>

<script>
  import "viser-vue"

  const DataSet = require("@antv/data-set");
  export default {
    name: "lineChart",
    props: ["chartData"],
    data() {
      return {
        data: [],
        scale: [],
        style: {stroke: '#fff', lineWidth: 1},
        position: '',
        color: '',
        height: 0
      };
    },
    mounted() {
      const sourceData = [
        { date: '2020-05-01', 曝光次数: 7.0},
        { date: '2020-05-02', 曝光次数: 6.9},
        { date: '2020-05-03', 曝光次数: 9.5},
        { date: '2020-05-04', 曝光次数: 14.5},
        { date: '2020-05-05', 曝光次数: 18.4}
      ];

      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        fields: ['曝光次数'],
        key: '维度',
        value: '次数',
      });
      const data = dv.rows;

      const scale = [{
        dataKey: 'date',
        min: 0,
        max: 1,
      }];

      this.data = data;
      this.scale = scale;
      this.height = 300;
      this.position = 'date*次数';
      this.color = 'city';
    }
  };
</script>
