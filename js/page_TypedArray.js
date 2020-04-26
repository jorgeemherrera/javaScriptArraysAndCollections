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

let testBuffer = new ArrayBuffer(16);

if (testBuffer.byteLength == 16 ){
  alert('Yes')
}
