'use strict';

// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

// let monthlyLabels = Array.of('Oct','Nov','Dec', 'Jan');
// let monthlySales = Array.of(500,750,3000,400,6700);

let deptSales = Array.of(12,9,3,2);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting', 'Soccer');

let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let basketBallRadio = document.getElementById('basketBallRadio');
let baseBallRadio = document.getElementById('baseBallRadio');
let swimmingRadio = document.getElementById('swimmingRadio');

let yearlyTotal = 0;

const monthlySales = new Map();

// Add

function addSale() {
  monthlySales.set(newMonth.value, parseInt(newAmount.value));
  // console.log(monthlySales);
  // console.log(monthlySales.size);

  // Update our labels
  monthlySalesChart.data.labels = Array.from(monthlySales.keys());

  // clear data
  yearlyTotal = 0;

  monthlySalesChart.data.datasets.forEach((dataset) => {
    dataset.data = [];
  });

  // Iterating through a Map() 

  for (let amount of monthlySales.values()) {
    yearlyTotal = amount + yearlyTotal;
    yearlyLabel.innerHTML = yearlyTotal;

    monthlySalesChart.data.datasets.forEach((dataset) => {
      dataset.data.push(amount);
    });
  }
  monthlySalesChart.update();
}

function findSale() {
  console.log(monthlySales.has(1));
}

function fillValue() {
  monthlySales.delete(1);
  console.log(monthlySales);
}
//Bar
var monthlySalesChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: [],
      datasets: [{
          label: '# of Sales',
          data: [],
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