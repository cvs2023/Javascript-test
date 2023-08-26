console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(3)
);
/* This code calculates the factorial of 10 using a recursive function. */
