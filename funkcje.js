﻿function getTriangleArea(a, h) {
if (a||h <= 0) {
return "Nieprawidłowe dane";
}
}

function getTriangleArea(a, h) {
if (a&&h > 0) {
return a*h/2;
}
}

console.log(getTriangleArea(10,6));


var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 20);
var triangle3Area = getTriangleArea(10, 30);