//just single values not array
function calc(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
//receving call back
const memoize = (fun) => {
  let cache = {};
  console.log({ cache });

  return function (...args) {
    // const n = JSON.stringify(args);
    const n = args[0];
    //return a fun closure using
    if (n in cache) {
      return cache[n];
    }
    let resp = fun(n);
    cache[n] = resp;
    return resp; //Storing first time and returning
  };
};

const eff = memoize(calc);

console.time();
console.log(eff(6)); //running first time
console.timeEnd();

console.time();
console.log(eff(6)); //running second time , 6 store hoga toh we will get in less time
console.timeEnd();

console.time();
console.log(eff(7)); //running second time , 6 store hoga toh we will get in less time
console.timeEnd();

console.time();
console.log(eff(7)); //running second time , 6 store hoga toh we will get in less time
console.timeEnd();

///how to take array
const m = (func) => {
  const cache = {};
  console.log({ cache });

  return (...args) => {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

// Example usage:
const expensiveFunction = (n) => {
  console.log("Calculating...");
  return n * 2;
};

const memoizedFunction = m(expensiveFunction);
console.log(memoizedFunction(5)); // Calculating... 10
console.log(memoizedFunction(5)); // 10 (retrieved from cache)

console.log(memoizedFunction(4)); // Calculating... 10
console.log(memoizedFunction(4)); // 10 (retrieved from cache)
