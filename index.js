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
  // Attempting to reassign a const will cause an error
  // Uncomment the following line to see the error in action:
  // leastFavoriteCustomer = 'Bob'; // TypeError: Assignment to constant variable
}
