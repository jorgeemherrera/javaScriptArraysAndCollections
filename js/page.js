'use strict';

// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');

let monthlyLabels = Array.of('Oct','Nov','Dec', 'Jan');
let monthlySales = Array.of(500,900,300,400);

let deptSales = Array.of(12,9,3,2);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting', 'Soccer');

// Bar
var monthlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: monthlyLabels,
      datasets: [{
          label: '# of Sales',
          data: monthlySales,
          backgroundColor: [
              'rgba(238, 184, 104, 1)',
              'rgba(75, 166, 223, 1)',
              'rgba(239, 118, 122, 1)',
              'rgba(46, 204, 113, 1)'
          ],
          borderWidth: 0
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
      labels: deptLabels,
      datasets: [{
          label: '# of Sales',
          data: deptSales,
          backgroundColor: [
              'rgba(238, 184, 104, 1)',
              'rgba(75, 166, 223, 1)',
              'rgba(239, 118, 122, 1)',
              'rgba(46, 204, 113, 1)'
          ],
          borderWidth: 0
      }]
  },
  options: {
      
  }
})