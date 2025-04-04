// Write your solution in this file!

var customerName = 'bob';
 
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}
 
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  window.bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Kim';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}