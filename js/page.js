'use strict';

// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlyLabels = Array.of('Oct','Nov','Dec', 'Jan');
let monthlySales = Array.of(500,750,3000,400);

let deptSales = Array.of(12,9,3,2);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting', 'Soccer');

function addYearlyTotal(a,b,c,d) {
    return a+b+c+d;
}

let octNums = Array.of(1200,1000,9000,7896);
let novNums = Array.of(1000,860,6530,1256);
let decNums = Array.of(857,320,1023,987);
let janNums = Array.of(1250,854,8795,675);

let totalNums = Array.of(
    addYearlyTotal(...octNums),
    addYearlyTotal(...novNums),
    addYearlyTotal(...decNums), 
    addYearlyTotal(...janNums)
    );
alert(addYearlyTotal(...totalNums));


let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = `$ ${yearlyTotal}`

// Array.find()

function findOver1000() {
    let firstThousand = monthlySales.find(element => element > 1000);
    alert(firstThousand);
}

// Array.fill

function resetTo0() {
    monthlySales.fill(0);
    monthlySalesChart.update();
}

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