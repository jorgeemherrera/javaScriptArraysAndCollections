'use strict';

// Charts
let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let deptSales = Array.of(12,9,3,2);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting', 'Soccer');

let newAmount = document.getElementById('itemAmount');
let newMonth = document.getElementById('monthId');

let basketBallRadio = document.getElementById('basketBallRadio');
let baseBallRadio = document.getElementById('baseBallRadio');
let swimmingRadio = document.getElementById('swimmingRadio');

let testBuffer = new ArrayBuffer(16);

let view1 = new Int16Array(testBuffer);
view1[0] = 32;

let view2 = new DataView(testBuffer);
view2.setInt8(2, 43)

console.log(view2);
console.log(view1);

let num = view2.getInt8(2);

console.log(num);

let view3 = new DataView(testBuffer);
let num2 = view3.getInt8(2);

console.log(num2);

let view4 = new DataView(testBuffer, 7, 3);
view4.setInt8(0, 54);
view4.setInt8(1, 23);
view4.setInt8(2, 32);

let numAlert = view4.getInt8(0);

console.log(numAlert)
