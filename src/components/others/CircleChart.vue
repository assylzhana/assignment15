<template>
  <div>
    <canvas ref="circleChart"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      chartData: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [150, 100, 50],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 255, 0)'],
            hoverOffset: 4,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.circleChart.getContext('2d');
      this.chart = new window.Chart(ctx, {
        type: 'doughnut',
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>


