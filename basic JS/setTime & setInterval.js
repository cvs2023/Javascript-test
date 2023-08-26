/* SET TIMEOUT */
//only once after the defined limit
setTimeout(function () {
  console.log("This will run once after 2000 milliseconds.");
}, 2000);

/* SET INTERVAl */
//called again after intervals
var intervalId = setInterval(function () {
  console.log("This will run every 1000 milliseconds.");
}, 1000);

// To stop the interval after a certain number of executions
setTimeout(function () {
  clearInterval(intervalId);
}, 6000); // Stop after 6 seconds prints 5 times
