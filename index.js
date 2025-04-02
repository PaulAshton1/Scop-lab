// Write your solution in this file!


//declare customerName in global scope using var
var customerName = 'bob'; 

//write upperCaseCustomerName() function
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // modifies the global customerName variable
}

//write setBestCustomer() function
function setBestCustomer() {
    var bestCustomer = 'not bob'; }


//write overwriteBestCustomer() function
function overwriteBestCustomer() { 
    bestcustomer = 'maybe bob'; // modifies the global bestCustomer variable
}

//declare leastFavoriteCustomer using const
const leastFavoriteCustomer = 'Alice';

//write changeLeastFavoriteCustomer() function
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob'; 
}   
