<template>
    <carousel :items-to-show="1" style="gap: 5rem;">
      <slide v-for="(chart, index) in charts" :key="index">
        <div class="chart-container">
          <div :id="'e_chart_' + (index + 1)" class="chart"><div class="imgs"><img src="./../assets/frontend/images/icons/l.png" alt="" /></div></div>
          
          <div class="chart-details">
            <div class="label-chart" v-for="(item, i) in chart.labels" :key="i">
              <span class="label-percentage">{{ item.percentage }}</span>
              <span class="label-text">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </slide>

  
      <template #addons>
        <navigation class="custom-navigation" style="color: aliceblue;"/>

      </template>
    </carousel>
    
  </template>
  
  <script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import * as echarts from 'echarts';  // Import echarts
  
  export default {
    name: 'App',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    data() {
      return {
        charts: [
          {
            labels: [
              { percentage: '85%', text: 'For participants of Pre-Sale and ICO' },
              { percentage: '8%', text: 'Reserved for the team.' },
              { percentage: '4%', text: 'Reserved for the consultants.' },
              { percentage: '3%', text: 'Bounty campaign' },
            ],
            seriesData: [
              { value: 85, name: 'For participants of Pre-Sale and ICO' },
              { value: 8, name: 'Reserved for the team' },
              { value: 4, name: 'Reserved for the consultants' },
              { value: 3, name: 'Bounty campaign' },
            ],
          },
          {
            labels: [
              { percentage: '85%', text: 'For participants of Pre-Sale and ICO' },
              { percentage: '8%', text: 'Reserved for the team.' },
              { percentage: '4%', text: 'Reserved for the consultants.' },
              { percentage: '3%', text: 'Bounty campaign' },
            ],
            seriesData: [
              { value: 85, name: 'For participants of Pre-Sale and ICO' },
              { value: 8, name: 'Reserved for the team' },
              { value: 4, name: 'Reserved for the consultants' },
              { value: 3, name: 'Bounty campaign' },
            ],
          },
        ],
      };
    },
    mounted() {
      this.initializeCharts();
    },
    methods: {
      initializeCharts() {
        this.charts.forEach((chart, index) => {
          const chartDom = document.getElementById('e_chart_' + (index + 1));
          const myChart = echarts.init(chartDom);
          const option = {
            tooltip: {
              trigger: 'item',
            },
            series: [
              {
                name: 'Distribution',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center',
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold',
                  },
                },
                labelLine: {
                  show: false,
                },
                data: chart.seriesData,
              },
            ],
          };
          myChart.setOption(option);
        });
      },
    },
  };
  </script>
  
  <style>

.custom-navigation {
  background: white;
}
  .chart-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f2330;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }
  
  .chart {
    width: 50%;
    height: 400px;
  }
  
  .chart-details {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .label-chart {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .label-percentage {
    color: #00d4ff;
    font-size: 20px;
    margin-right: 10px;
  }
  
  .label-text {
    color: #fff;
    font-size: 16px;
  }
  
  .carousel .carousel-container.autoHeight {
    transition: height 500ms ease-in-out;
  }
  
  .carousel .carousel-slide {
    float: left;
  }
  
  .carousel-controls .carousel-buttons div,
  .carousel-controls .carousel-page {
    cursor: pointer;
  }
  
  .carousel-controls {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  .grabbing {
    cursor: url(grabbing.png) 8 8, move;
  }
  
  .carousel-theme .carousel-controls {
    margin-top: 10px;
    text-align: center;
  }
  
  .carousel-theme .carousel-controls .carousel-buttons div {
    color: #fff;
    display: inline-block;
    zoom: 1;
    display: inline;
    margin: 5px;
    padding: 3px 10px;
    font-size: 12px;
    border-radius: 30px;
    background: #869791;
    filter: Alpha(Opacity=50);
    opacity: 0.5;
  }
  
  .carousel-theme .carousel-controls.clickable .carousel-buttons div:hover {
    filter: Alpha(Opacity=100);
    opacity: 1;
    text-decoration: none;
  }
  
  .carousel-theme .carousel-controls .carousel-page {
    display: inline-block;
    zoom: 1;
    display: inline;
  }
  
  .carousel-theme .carousel-controls .carousel-page span {
    display: block;
    width: 12px;
    height: 12px;
    margin: 5px 7px;
    filter: Alpha(Opacity=50);
    opacity: 0.5;
    border-radius: 20px;
    background: #869791;
  }
  
  .carousel-theme .carousel-controls .carousel-page.active span,
  .carousel-theme .carousel-controls.clickable .carousel-page:hover span {
    filter: Alpha(Opacity=100);
    opacity: 1;
  }
  
  .carousel-theme .carousel-controls .carousel-page span.carousel-numbers {
    height: auto;
    width: auto;
    color: #fff;
    padding: 2px 10px;
    font-size: 12px;
    border-radius: 30px;
  }
  
  .carousel-slide.loading {
    min-height: 150px;
    background: url(AjaxLoader.gif) no-repeat center center;
  }
  
  .carousel-origin {
    perspective: 1200px;
    perspective-origin: 50% 50%;
  }
  
  .carousel-fade-out {
    z-index: 10;
    animation: fadeOut 0.7s both ease;
  }
  
  .carousel-fade-in {
    animation: fadeIn 0.7s both ease;
  }
  
  .carousel-backSlide-out {
    animation: backSlideOut 1s both ease;
  }
  
  .carousel-backSlide-in {
    animation: backSlideIn 1s both ease;
  }
  
  .carousel-goDown-out {
    animation: scaleToFade 0.7s ease both;
  }
  
  .carousel-goDown-in {
    animation: goDown 0.6s ease both;
  }
  
  .carousel-fadeUp-in {
    animation: scaleUpFrom 0.5s ease both;
  }
  
  .carousel-fadeUp-out {
    animation: scaleUpTo 0.5s ease both;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes backSlideOut {
    25% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    75%,
    100% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(-200%);
    }
  }
  
  @keyframes backSlideIn {
    0%,
    25% {
      opacity: 0.5;
      transform: translateZ(-500px) translateX(200%);
    }
    75% {
      opacity: 0.5;
      transform: translateZ(-500px);
    }
    100% {
      opacity: 1;
      transform: translateZ(0) translateX(0);
    }
  }
  
  @keyframes scaleToFade {
    to {
      opacity: 0;
      transform: scale(0.8);
    }
  }
  
  @keyframes goDown {
    from {
      transform: translateY(-100%);
    }
  }
  
  @keyframes scaleUpFrom {
    from {
      opacity: 0;
      transform: scale(1.5);
    }
  }
  
  @keyframes scaleUpTo {
    to {
      opacity: 0;
      transform: scale(1.5);
    }
  }
  </style>
  