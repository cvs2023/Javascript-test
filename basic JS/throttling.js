/* Nmaste */
const loggerFunc = () => {
  console.count("Throttled Function");
};

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
const betterLoggerFunction = throttle(loggerFunc, 1000);
window.addEventListener("resize", betterLoggerFunction);

const normalFunc = () => {
  console.count("Normal Function");
};

window.addEventListener("resize", normalFunc);

//my namaste
const expensive = () => {
  console.log("clicked ");
};
const throttleNamo = (func, limit) => {
  let flag = false;

  return function () {
    if (flag) {
      func(); //call kro
      flag = false; //next call rok do

      setTimeout(() => {
        flag = true; //itne time k baad firse allow krdo next call
      }, limit);
    }
  };
};
const betterExpensive = throttleNamo(expensive, 100);
window.addEventListener("resize", betterExpensive);

/* Throttling in JavaScript is a technique used to limit the frequency at which a function can be executed. It is similar to debouncing, but instead of delaying the execution of a function, throttling ensures that the function is called at a regular interval, usually with a fixed delay between each invocation.

The purpose of throttling is to control the rate at which a function is called, especially in scenarios where rapid and continuous function calls can negatively impact performance or overwhelm a server with excessive requests.ā */

function handleScroll() {
  // Perform some operation on scroll event
  console.log("Scroll event processed");
}

function throttle(func, delay) {
  let timeoutId;
  let lastExecutedTime = 0;

  return function () {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - lastExecutedTime;

    if (elapsedTime >= delay) {
      func();
      lastExecutedTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay - elapsedTime);
    }
  };
}
const throttledHandleScroll = throttle(handleScroll, 300);

// Attach the throttled function to the scroll event
window.addEventListener("scroll", throttledHandleScroll);

/* In this implementation, the throttle function takes two parameters: func, which is the function to be throttled, and delay, which is the minimum time interval between function invocations in milliseconds.

The throttle function returns a new function that wraps the original func. When the new function is called, it checks the elapsed time since the last function execution. If the elapsed time is greater than or equal to the specified delay, it immediately invokes func and updates the lastExecutedTime. Otherwise, it clears any existing timeout using clearTimeout and sets a new timeout using setTimeout to invoke func after the remaining time of delay - elapsedTime. */

/* uses

Preventing a button from being clicked too many times in quick succession.
Preventing a form from being submitted too many times in quick succession.
Preventing an API request from being made too many times in quick succession.
Preventing a scroll event from being fired too frequently.
*/

/* 

function throttle(func, delay) {
  var timeout;
  var count = 0;

  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }

    count++;

    timeout = setTimeout(function() {
      count = 0;
    }, delay);

    if (count <= 1) {
      func();
    }
  };
}
*/
