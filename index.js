// Write your solution in this file!
// index.js

//
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

const leastFavoriteCustomer = "initial customer";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new customer"; // This will cause an error
}
