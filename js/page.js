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

// Adding and Removing Values from Sets

const monthlySales = new Set();
const monthlyLabels = new Set();

// WeakSet
const categories = new WeakSet();

let basket =    { category: 'Basketball' };
let baseball =  { category: 'Baseball' };
let swimming =  { category: 'Swimming' };

function addSale() {
    // Add to a Set
    monthlySales.add(parseInt(newAmount.value));
    monthlyLabels.add(newMonth.value);

    // Iterating a Set
    yearlyTotal = 0;

     // loop update values
     monthlySalesChart.data.datasets.forEach((dataset) =>{
        dataset.data = [];
    });

    for (let amount of monthlySales) {
        yearlyTotal = amount + yearlyTotal;
        yearlyLabel.innerHTML = yearlyTotal;

        // loop update values
        monthlySalesChart.data.datasets.forEach((dataset) =>{
            dataset.data.push(amount);
        })
    }

    monthlySalesChart.data.labels = Array.from(monthlyLabels);

    monthlySalesChart.update();

    if (basketBallRadio.checked) {
        categories.add(basket);
    } else if (baseBallRadio.checked) {
        categories.add(baseball)
    } else if (swimmingRadio.checked) {
        categories.add(swimming)
    } else {
        // Do somethig else
    }

    console.log('Categories: ', categories);
    
}

function deleteVal() {
    monthlySales.forEach((value1, value2, monthlySales) => {
        alert(value1);
    })
}

function addTotal() {
    
}

// Iterating through Array of montlySales and adding in forEach
function addYearlyTotal(x) {
    yearlyTotal = x + yearlyTotal;
}

monthlySales.forEach(addYearlyTotal);

let octNums = Array.of(1200,1000,9000,7896);
let novNums = Array.of(1000,860,6530,1256);
let decNums = Array.of(857,320,1023,987);
let janNums = Array.of(1250,854,8795,675);

// let totalNums = Array.of(
//     addYearlyTotal(...octNums),
//     addYearlyTotal(...novNums),
//     addYearlyTotal(...decNums), 
//     addYearlyTotal(...janNums)
//     );
// alert(addYearlyTotal(...totalNums));

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