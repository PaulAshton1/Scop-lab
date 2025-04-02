// Write your solution in this file!


// Declare customerName in global scope using var
var customerName = 'bob';

// Write upperCaseCustomerName() function
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // modifies the global customerName variable
}

// Write setBestCustomer() function
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declare bestCustomer in global scope
}

// Write overwriteBestCustomer() function
function overwriteBestCustomer() { 
  bestCustomer = 'maybe bob'; // Modifies the global bestCustomer variable (correct variable name)
}

// Declare leastFavoriteCustomer using const
const leastFavoriteCustomer = 'Alice';

// Write changeLeastFavoriteCustomer() function
function changeLeastFavoriteCustomer() {
    try {
      leastFavoriteCustomer = 'Bob'; // Attempting to reassign a const will cause an error
    } catch (e) {
      console.log('Error caught: ' + e.message);  // This logs the error message
    }
 
}
