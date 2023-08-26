export default function useDebounce(callback, delay) {
  let timer;
  // const timerRef = useRef(null);
  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timer); //timerRef.current

    timer = setTimeout(() => {
      callback.apply(context, args);
      console.log("debounce runs after delay of - ", delay);
    }, delay);
  };
}

//why clear timeout
/* Preventing Immediate Execution: When the debounced function is invoked, the timer is cleared first using clearTimeout(timer). This prevents the previously scheduled execution of the debounced function from happening immediately. Instead, it resets the timer to start counting from zero again. */

/* 
Preventing Immediate Execution: When the debounced function is invoked, the timer is cleared first using clearTimeout(timer). This prevents the previously scheduled execution of the debounced function from happening immediately. Instead, it resets the timer to start counting from zero again.

Restarting the Timer: If the debounced function is called multiple times in quick succession, the timer will be reset each time the function is invoked. This ensures that the function only executes after a certain period of inactivity following the last call. If you didn't clear the timer, the function might execute unexpectedly, even before the specified delay has passed.

Handling Rapid Events: Without clearing the timer, if you have rapid events (such as fast typing or frequent UI updates), the debounced function might never get a chance to execute because the timer could be perpetually reset. Clearing the timer ensures that the function executes only once, after the specified delay, regardless of how frequently the debounced function is called during that time.

By clearing the timer before setting a new timeout, you're effectively controlling the timing and preventing the debounced function from executing too early or too frequently. This is fundamental to achieving the debounce behavior, where you want to ensure that the function execution is delayed until the input or event has settled down for a specified duration.


*/
/*  */
/*  */
/*  */
/*  */
