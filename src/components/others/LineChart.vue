<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
          {
            label: 'Weekly Performance',
            borderColor: 'rgb(255, 99, 132)',
            data: [120, 90, 110, 80, 100, 75, 95],
            fill: false,
          },
        ],
      },
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.lineChart.getContext('2d');
      this.chart = new window.Chart(ctx, {
        type: 'line',
        data: this.data,
      });
    },
  },
};
</script>
