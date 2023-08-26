/* let counter = 0;

const getData = () => {
  console.log("Fetching Data ", counter);
};

const doSomething = (fn, delay) => {
    let timer;
  return function () {
    let context = this;

    setTimeout(() => {
      getData();
    }, d);
  };
};
const betterFunction = doSomething(getData, 300); */

// debouncing example easy

/* //count just to see console in new line and ccount calls in ui */

count = 0;
function handleInput() {
  // Perform some expensive operation here
  console.log("Input processed", count++);
}

/* The debounce function returns a new function that wraps the original func. When the new function is called, it clears any existing timeout using clearTimeout, and sets a new timeout using setTimeout to invoke func after the specified delay. */
function debounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

/* This function takes two arguments: the function that you want to debounce, and the amount of time (in milliseconds) that you want to delay it. */
const debouncedHandleInput = debounce(handleInput, 300);

// Attach the debounced function to an event listener
document.addEventListener("input", debouncedHandleInput);
